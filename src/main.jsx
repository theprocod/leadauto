import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#0F2A3F',
            color: '#FAF7F2',
            borderRadius: '16px',
            padding: '14px 18px',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '0 8px 32px rgba(15,42,63,0.2)',
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
)
