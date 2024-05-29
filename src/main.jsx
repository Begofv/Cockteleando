import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { BusquedaNombre } from './components/busquedaNombre.jsx'
import { BusquedaIngrediente } from './components/busquedaIngrediente.jsx'
import { BusquedaLetra } from './components/busquedaLetra.jsx'
import { Random_f } from './components/random_f.jsx'
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
