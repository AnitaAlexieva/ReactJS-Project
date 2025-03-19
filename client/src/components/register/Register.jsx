import './register.css'

export default function Register() {
    return(
        
        <div class="wrapper">
          <div class="title"><span>Register</span></div>
          <form action="#">
            <div class="row">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" required />
            </div>
            <div class="row">
            <i class="fa-solid fa-envelope"></i>
              <input type="text" placeholder="Email" required />
            </div>
            <div class="row">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <div class="row button">
              <input type="submit" value="Login" />
            </div>
            <div class="signup-link">Already a member? <a href="/login">Log in now</a></div>
          </form>
        </div>
      
    )
}