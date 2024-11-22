import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-full h-screen px-96  bg-zinc-900'>
      <App />
    </div>
  </StrictMode>,
)
