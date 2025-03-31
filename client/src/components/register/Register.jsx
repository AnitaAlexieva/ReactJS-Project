import { useNavigate } from 'react-router';
import './register.css'
import { useRegister } from '../../api/authApi';
import {  useUserContext } from '../../contexts/UserContext';

export default function Register() {
  const navigate = useNavigate();
  const {register} = useRegister();
  const {userLoginHandler} = useUserContext();

  const registerHandler = async (formData) =>{
    const {username, email, password} = Object.fromEntries(formData);
    const confirmPassword = formData.get('confirm-password');

    if(password !== confirmPassword){
      console.log('Password missmatch!')

      return;
    }

    const auhtData = await register(username, email, password);
    userLoginHandler(auhtData);

    navigate('/');
  }
    return(
        
        <div className="wrapper">
          <div className="title"><span>Register</span></div>
          <form action={registerHandler}>
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" name='username' placeholder="Username" required />
            </div>
            <div className="row">
            <i className="fa-solid fa-envelope"></i>
              <input type="email" name='email' placeholder="Email" required />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" name='password' placeholder="Password" required />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" name='confirm-password' placeholder="Confirm Password" required />
            </div>
            <div className="row button">
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">Already a member? <a href="/login">Log in now</a></div>
          </form>
        </div>
      
    )
}