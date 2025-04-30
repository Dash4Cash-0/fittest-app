import { useState } from 'react';
import '../css/login.css'

function Login(){

  const[visible, setVisible] = useState(false);
  const[animation, setAnimation] = useState(false)

  const rotateShift = () => {
    setAnimation(true)
    
    setTimeout(() => {
      setVisible(true)
    },500)
  }

  return (
    <>
      <div className={`login-card ${animation ? 'animate-out' : ''}`} style={{display: visible ? 'none' : 'block'}}>
      
        <h2>Log in to your account</h2>
        <div className="user-input">
          
            <p>Username:</p>
            <input type="text" className="username-input" required/>
            <p>Password:</p>
            <input type="password" className="password-input" required/>
          
          <div className="login-register">
            <button type="submit" className="login-btn" >Login</button>
            <button type="submit" className="register-btn" onClick={rotateShift}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;