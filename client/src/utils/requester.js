export const request = async (method, URL, data) =>{
    let options = {};

    if(method !== 'GET'){
        options = {
            method,
        }
      
    }
    if(data){
        options ={
            ...options,
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data),
        }
    }
    
    const response = await fetch(URL, options);
    const result = await response.json();

    return result;
}