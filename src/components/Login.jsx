import '../css/login.css'

function Login(){
  return (
    <>
      <div className="login-card">
        <h2>Log in to your account</h2>
        <div className="user-input">
          
            <p>Username:</p>
            <input type="text" className="username-input" required/>
            <p>Password:</p>
            <input type="password" className="password-input" required/>
          
          <div className="login-register">
            <button type="submit" className="login-btn">Login</button>
            <button type="submit" className="register-btn">Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;