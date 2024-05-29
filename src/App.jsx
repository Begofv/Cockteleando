import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './components/modal'

import { BuscarNombre } from './api'

function App() {
  return (
    <h1>Cockteleando</h1>
  )
}


function Navbar() {
  return (
    <div>
      <div>
        <p>Nombre de cocktail</p>
        <input type='text' placeholder='Nombre'></input>
      </div>
      <div>
        <p>Busqueda por ingrediente</p>
        <select>
          <option>Opcion 1</option>
        </select>
      </div>
      <div>
        <form>
          <input type='radio' value="Lleva alcohol" name="alcohol" /> Lleva Alcohol
          <input type='radio' value="No leva alcohol" name="alcohol" /> No lleva Alcohol
          <input type='radio' value="Todo" name="alcohol" /> Todo
        </form>
      </div>   
    <input id="buttonFind" type="submit" value="Send Request" />
    </div>
  )
}


function BusquedaLetra() {
  return (
    <div>
      <h3>
        Busqueda de cocktail por letra
      </h3>
      <a href="">A</a>
      <a href="">B</a>
      <a href="">C</a>
      <a href="">D</a>
      <a href="">E</a>
      <a href="">F</a>
      <a href="">G</a>
      <a href="">H</a>
      <a href="">I</a>
      <a href="">J</a>
      <a href="">K</a>
      <a href="">L</a>
      <a href="">M</a>
      <a href="">N</a>
      <a href="">O</a>
      <a href="">P</a>
      <a href="">Q</a>
      <a href="">R</a>
      <a href="">S</a>
      <a href="">T</a>
      <a href="">U</a>
      <a href="">V</a>
      <a href="">W</a>
      <a href="">X</a>
      <a href="">Y</a>
      <a href="">Z</a>
    </div>
  )
}


function Random() {
  return (
    <div>
      <img src="" />Estoy Aqui!!
    </div>
  )
}



export {
  App,
  Navbar,
  BusquedaLetra,
  Random
} 
