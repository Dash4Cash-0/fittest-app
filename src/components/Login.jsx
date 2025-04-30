import { useState } from 'react';
import '../css/login.css'

function Login(){

  const[visible, setVisible] = useState(false);

  const rotateShift = () => {
    setVisible(true);
  
  }

  return (
    <>
      <div className="login-card" style={{display: visible ? 'none' : 'block'}}>
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