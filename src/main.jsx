import React from 'react'
import ReactDOM from 'react-dom/client'
import {App, BusquedaNombre, BusquedaIngrediente, BusquedaLetra, Random_f} from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BusquedaNombre />
    <BusquedaIngrediente />
    <BusquedaLetra />
    <Random_f />
    <Random_f />
    <Random_f />
    <Random_f />
    <Random_f />
  </React.StrictMode>,
)
