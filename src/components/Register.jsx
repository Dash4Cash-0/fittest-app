
import '../css/register.css'

function Register({animating,hasInteracted, onBackClick, isVisible}) {


  return (
    <>
    <div className={`register-card ${hasInteracted ? (animating ? 'animate-out' : 'animate-in') : ''}`} style={{display: isVisible ? 'block' : 'none'}}>
        <h2>Register a new account</h2>
        <form className="register-user">
        
          
            <p>Username:</p>
            <input type="text" className="username-input" required/>
            <p>Email:</p>
            <input type="text" className="email-input" required/>
            <p>Re-enter Email:</p>
            <input type="text" className="re-email-input" required/>
            <p>Password:</p>
            <input type="password" className="password-input" required/>
            <p>Re-enter Password:</p>
            <input type="password" className="re-password-input" required/>
            </form>
      
          <div className="register-btns">
            <button type="submit" className="login-btn">Register</button>
            <button type="submit" className="goBack-btn" onClick={onBackClick}>Go back</button>
          </div>
        </div>
    </>
  )

}

export default Register;