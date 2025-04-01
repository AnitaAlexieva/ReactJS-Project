export const request = async (method, URL, data, options = {}) =>{

    if(method !== 'GET'){
        options.method = method  
    }

    if(data){
        options ={
            ...options,
            headers:{
                'Content-Type':'application/json',
                ...options.headers,
            },
            body:JSON.stringify(data),
        }
    }

    try {
        const response = await fetch(URL, options);

        // Проверка на статуса на отговора (ако не е успешен, хвърляме грешка)
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const responseContentType = response.headers.get('Content-Type');
        if (!responseContentType) {
            throw new Error('No Content-Type header in response');
        }

        const result = await response.json();
        return result;
        
    } catch (error) {
        // Логваме грешката, за да разберем какво се е случило
        console.error('Error during request:', error.message);
        throw error; // Прехвърляме грешката нагоре, за да може да бъде обработена в компонентите
    }
}

export default{
    get:request.bind(null, 'GET'),
    post:request.bind(null, 'POST'),
    put:request.bind(null, 'PUT'),
    delete:request.bind(null, 'DELETE'),
    baseRequest : request,
}