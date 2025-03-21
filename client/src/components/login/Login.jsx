import './login.css'

export default function Login() {
    return(
        
        <div class="wrapper">
          <div class="title"><span>Login Form</span></div>
          <form action="#">
            <div class="row">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Email or Phone" required />
            </div>
            <div class="row">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <div class="row button">
              <input type="submit" value="Login" />
            </div>
            <div class="signup-link">Not a member? <a href="/register">Signup now</a></div>
          </form>
        </div>
      
    )
}