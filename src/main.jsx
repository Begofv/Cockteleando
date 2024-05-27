import React from 'react'
import ReactDOM from 'react-dom/client'
import {App, Navbar, BusquedaLetra, Random} from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <BusquedaLetra />
    <Random />
  </React.StrictMode>,
)
