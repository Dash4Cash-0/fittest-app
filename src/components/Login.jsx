import '../css/login.css'

function Login(){
  return (
    <>
      <header>
        <h1>Fittest</h1>
      </header>
      <div className="login-card">
        <h2>Log in to your account</h2>
        <div className="user-input">
          <p>Username:</p>
          <p>Password:</p>
          <input type="text" className="user-input"/>
          <input type="password" className="password-input"/>
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