
import '../css/register.css'

function Register({animating,hasInteracted, onBackClick, isVisible}) {


  return (
    <>
    <div className={`register-card ${hasInteracted ? (animating ? 'animate-out' : 'animate-in') : ''}`} style={{display: isVisible ? 'block' : 'none'}}>
        <h2>Register a new account</h2>
        
        <form className="register-user">
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" className="username-input" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" className="email-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="re-email">Re-enter Email:</label>
                  <input type="email" id="re-email" className="re-email-input" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" className="password-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="re-password">Re-enter Password:</label>
                  <input type="password" id="re-password" className="re-password-input" required />
                </div>
              </div>
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