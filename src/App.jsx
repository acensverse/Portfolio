import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import ThreeScene from './components/ThreeScene'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ThreeScene modelPath="public/images/chibi_Astro_bot_weari_0928204039_refine.glb"/>
    </>
  )
}

export default App
