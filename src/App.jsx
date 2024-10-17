import './App.css'
import React, { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import ThreeScene from './components/ThreeScene'
import { ThemeProvider } from './context/theme'
import Particle from './components/Particle'

function App() {

  const [themeMode, setThemeMode] = useState('light')
  const [isAnimating, setIsAnimating] = useState(false);

  const darkTheme = () => {
    setThemeMode('dark')
    triggerAnimation();
  }

  const lightTheme = () => {
    setThemeMode('light')
    triggerAnimation();
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Animation duration (match it with your CSS)
  };
  
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    }
  ])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className={`app bg-[#F0F7F4] dark:bg-[#0F1020] transition-all duration-500 ${
          isAnimating ? 'zoom-out' : ''
        }`}>
        <RouterProvider router={router} />
        <ThreeScene modelPath="/images/chibi_Astro_bot_weari_0928204039_refine.glb" />
        <Particle/>
      </div>
    </ThemeProvider>
  )
    
      
}

export default App
