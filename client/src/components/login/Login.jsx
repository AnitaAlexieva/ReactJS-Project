import { Link, useNavigate } from 'react-router';
import './login.css'
import { useActionState, useContext } from 'react';
import { useLogin } from '../../api/authApi';
import { UserContext } from '../../contexts/UserContext';

export default function Login() {
  const navigate = useNavigate();
  const {login} = useLogin();
  const {userLoginHandler} = useContext(UserContext);
  
  const loginHandler = async (_, formData) =>{
    const values = Object.fromEntries(formData);
    
    const authData = await login(values.email, values.password);

    userLoginHandler(authData);
    navigate('/recipes')
    return values;
  }

  const [_, loginAction, isPending] = useActionState(loginHandler, {email:'', password: ''});

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