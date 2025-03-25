import { Link, useNavigate } from 'react-router';
import './login.css'
import { useActionState } from 'react';

export default function Login({
  onLogin
}) {
  // const navigate = useNavigate();
  
  const loginHandler = (preciousState, formData) =>{
    const values = Object.fromEntries(formData);
    
    onLogin(values.email);
    // navigate('/recipes')
    return values;
  }

  const [values, loginAction, isPending] = useActionState(loginHandler, {email:'', password: ''});

  console.log(values)
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
              <input type="submit" value="Login" disabled={isPending}/>
            </div>
            <div className="signup-link">Not a member? <Link to={'/register'} >Signup now</Link></div>
          </form>
        </div>
      
    )
}