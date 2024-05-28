import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BuscarNombre, BuscarLetra, Random } from './api'

function App() {
  return (
    <h1>Cockteleando</h1>
  )
}


function Navbar() {
  const [bebida, setBebida] = useState('')
  const [img, setImg] = useState('')

  async function buttonOnsubmitHandler(e) {
    e.preventDefault()
    let nombre = e.target[0].value;
    let result = await BuscarNombre(nombre)
    setBebida(result['drinks'][0]['strInstructions'])
    setImg(result['drinks'][0]['strDrinkThumb'])
  } 

  return (
    <div>
      <form onSubmit={buttonOnsubmitHandler}>
        <div>
          <label htmlFor="nombre">Nombre de cocktail </label>
          <input type='text' placeholder='Nombre' name='nombre' />
        </div>
        <br />
        <div>
          <label htmlFor="ingrediente">Busqueda por ingrediente </label>
          <select>
            <option name='ingrediente'>Opcion 1</option>
          </select>
        </div>
        <br />
        <div>
            <input type='radio' value="alcoholil" name="alcohol" /> Lleva Alcohol
            <br />
            <input type='radio' value="non-alcoholic" name="alcohol" /> No lleva Alcohol
            <br />
            <input type='radio' value="" name="alcohol" /> Todos
          <br />
        </div>   
        <div>
          <input id="buttonFind" type="submit" value="Send Request" />
        </div>
      </form>
      <img src={img} />
      <p>{bebida}</p>
    </div>
  )
}



function BusquedaLetra() {
  return (
    <div>
      <h3>
        Busqueda de cocktail por letra
      </h3>
      <a href=""> A </a>/
      <a href=""> B </a>/
      <a href=""> C </a>/
      <a href=""> D </a>/
      <a href=""> E </a>/
      <a href=""> F </a>/
      <a href=""> G </a>/
      <a href=""> H </a>/
      <a href=""> I </a>/
      <a href=""> J </a>/
      <a href=""> K </a>/
      <a href=""> L </a>/
      <a href=""> M </a>/
      <a href=""> N </a>/
      <a href=""> O </a>/
      <a href=""> P </a>/
      <a href=""> Q </a>/
      <a href=""> R </a>/
      <a href=""> S </a>/
      <a href=""> T </a>/
      <a href=""> U </a>/
      <a href=""> V </a>/
      <a href=""> W </a>/
      <a href=""> X </a>/
      <a href=""> Y </a>/
      <a href=""> Z </a>
    </div>
  )
}


function Random_f() {
  const [imagen, setImagen] = useState('')
  const [datos, setDatos] = useState('')

  async function cocktailRandom() {
    const datoRandom = await Random();
    const image = datoRandom['drinks'][0]['strDrinkThumb']
    //setImagen(image)

    const preparacion = datoRandom['drinks'][0]['strInstructions']
    //setDatos(preparacion)
  }

  cocktailRandom()

  return (
    <div>
      <img src={imagen} />
      <p>{datos}</p>
    </div>
  )
}



export {
  App,
  Navbar,
  BusquedaLetra,
  Random_f
} 
