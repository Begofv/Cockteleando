import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { BusquedaNombre } from './components/busquedaNombre.jsx'
import { BusquedaLetra } from './components/busquedaLetra.jsx'
import { ImgIzquierda } from './components/imgIzquierda.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('izquierda')).render(
  <React.StrictMode>
    <ImgIzquierda />
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BusquedaNombre />
    <BusquedaLetra />
  </React.StrictMode>,
)
