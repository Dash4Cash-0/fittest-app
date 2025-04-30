import { useState } from 'react';
import './App.css';
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

function App() {
  
  const[currentView, setCurrentView] = useState('login');
  const[animating, setAnimating] = useState(false)
  const[hasInteracted, setHasInteracted] = useState(false)


  const goToRegister = () => {
    setHasInteracted(true)
    setAnimating(true)

    setTimeout(() => {
      setCurrentView('register');
      setAnimating(false)
    },200);
  }

  const goToLogin = () => {
    setHasInteracted(true)
    setAnimating(true)

    setTimeout(() => {
      setCurrentView('login')
      setAnimating(false)
    },200)
  }
  
  return (

    <>
      <header>
          <h1>Fittest</h1>
        </header>
        {currentView === 'login' && (
          <Login animating={animating} 
          hasInteracted={hasInteracted} 
          onRegisterClick={goToRegister}
          isVisible={currentView === 'login'}
          />
        )}

          {currentView === 'register' && (
          <Register animating={animating}
           hasInteracted={hasInteracted}
            onBackClick={goToLogin}
            isVisible={currentView === 'register'}/>
        )}
          
    </>
    
);
}

export default App;
