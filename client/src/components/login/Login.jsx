import { Link, useNavigate } from 'react-router';
import './login.css'
import { useActionState } from 'react';
import { useLogin } from '../../api/authApi';
import {  useUserContext } from '../../contexts/UserContext';
import {toast} from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();
  const {login} = useLogin();
  const {userLoginHandler} = useUserContext();
  
  const loginHandler = async (_, formData) => {
    const values = Object.fromEntries(formData);
  
    try {
      const authData = await login(values.email, values.password);
  
      if (!authData || !authData.accessToken) {
        throw new Error("Invalid email or password");
      }
  
      userLoginHandler(authData);
      toast.success("Successful login");
      navigate("/recipes");
    } catch (err) {
      toast.error(err.message || "Login failed");
    }
  
    return values;
  };

  const [_, loginAction, isPending] = useActionState(loginHandler, {username:'', email:'', password: ''});

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