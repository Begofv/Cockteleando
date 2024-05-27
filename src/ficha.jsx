import React from 'react'
import ReactDOM from 'react-dom/client'
import { Izquierda, Derecha } from './ficha.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <izquierda />    
    <derecha />
  </React.StrictMode>,
)
