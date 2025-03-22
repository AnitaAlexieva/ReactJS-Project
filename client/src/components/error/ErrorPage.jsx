import './error.css'

export default function ErrorPage() {
    return(
        <div className="container-err">
        <img src="/images/404.png" alt="Sad Pancake"/>
        <h1>404</h1>
        <p>Oops! The page you are looking for is not found.</p>
        <a href="/" className="btn">Go Home</a>
    </div>
    )
}