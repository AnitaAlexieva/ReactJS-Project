import { Link } from "react-router"
import { useUserContext } from "../../contexts/UserContext"

export default function Header() {
   const { email, username } = useUserContext();

   return (
      <div className="header_section">
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="logo"><Link to="/"><img className="img-logo" src="/images/logo2.png" /></Link></div>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">

                     <Link className="nav-link" to="/">Home</Link>
                     <Link className="nav-link" to="/recipes">Recipes</Link>
                     <Link className="nav-link" to="/books">Books</Link>
                     {email ?
                        (
                           <div id="user">
                              <Link className="nav-link" to="/meals">Gallery</Link>
                              <Link className="nav-link" to="/logout">Logout</Link>
                              <li className="hello">Hello, {username} !</li>
                           </div>
                        )
                        : (

                           <div id="guest">
                              <Link className="nav-link" to="/login">Login</Link>
                              <Link className="nav-link" to="/register">Register</Link>
                           </div>
                        )

                     }

                  </ul>
               </div>
            </nav>
         </div>
      </div>
   )
}