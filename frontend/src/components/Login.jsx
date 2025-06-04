import '../css/login.css'
import { useNavigate } from 'react-router-dom';

function Login({animating, hasInteracted, onRegisterClick, isVisible}){

 const navigate = useNavigate();

 const goToDashboard = () => {
  navigate('/dashboard')

 }

  return (
    <>
      <div className={`login-card ${hasInteracted ? (animating ? 'animate-out' : 'animate-in') : ''}`}style={{display: isVisible ? 'block' : 'none'}}>
      
        <h2>Log in to your account</h2>
        <div className="user-input">
          
            <p>Username:</p>
            <input type="text" className="username-input" required/>
            <p>Password:</p>
            <input type="password" className="password-input" required/>
          
          <div className="login-register">
            <button type="submit" className="login-btn" onClick={goToDashboard}>Login</button>
            <button type="submit" className="register-btn" onClick={onRegisterClick}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;