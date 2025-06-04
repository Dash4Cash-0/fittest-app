import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Dashboard from './pages/Dashboard.js';

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
      setHasInteracted(false)
    },200);
  }

  const goToLogin = () => {
    setHasInteracted(true)
    setAnimating(true)

    setTimeout(() => {
      setCurrentView('login')
      setAnimating(false)
      setHasInteracted(false)
    },200)
  }
  
  return (

    <>
      
  
      <header>
          <h1>Fittest</h1>
        </header>
        <Routes>
          <Route
          path="/"
          element={
            <div>
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
          </div>
        }
        />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
          
    </>
    
);
}

export default App;
