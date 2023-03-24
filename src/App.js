import { BrowserRouter } from 'react-router-dom';
import './style/style.css'
import React, { useEffect, useState } from 'react';
import { NavBar } from './components/UI/Navbar/Navbar';
import { AppRouter } from './components/AppRouter';
import { AuthContext } from './context';


function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth,isLoading }}><BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
    </AuthContext.Provider>

  )

}

export default App;
