import { useNavigate } from 'react-router';
import './register.css';
import { useRegister } from '../../api/authApi';
import { useUserContext } from '../../contexts/UserContext';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Register() {
  const navigate = useNavigate();
  const { register } = useRegister();
  const { userLoginHandler } = useUserContext();


  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const registerHandler = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      setFormData({ ...formData, password: '', confirmPassword: '' });
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      setFormData({ ...formData, password: '', confirmPassword: '' });
      return;
    }

    try {
      const authData = await register(username, email, password);
      userLoginHandler(authData);
      navigate('/');
    } catch (err) {
      toast.error(err.message || 'Registration failed!');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="wrapper">
      <div className="title"><span>Register</span></div>
      <form onSubmit={registerHandler}>
        <div className="row">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row">
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row button">
          <input type="submit" value="Register" />
        </div>
        <div className="signup-link">Already a member? <a href="/login">Log in now</a></div>
      </form>
    </div>
  );
}
