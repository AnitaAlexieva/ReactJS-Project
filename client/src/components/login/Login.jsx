import { Link, useNavigate } from 'react-router';
import './login.css'

export default function Login({
  onLogin
}) {
  const navigate = useNavigate();

  const loginAction = (formData) =>{
    const email = formData.get('email');

    onLogin(email);
    navigate('/recipes')
  }
    return(
        
        <div className="wrapper">
          <div className="title"><span>Login Form</span></div>
          <form action={loginAction}>
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="email" name='email' placeholder="Email" />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" name='password' placeholder="Password"  />
            </div>
            <div className="row button">
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">Not a member? <Link to={'/register'} >Signup now</Link></div>
          </form>
        </div>
      
    )
}