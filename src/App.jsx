import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BuscarNombre, BuscarLetra, Random, Ingredientes, BuscarIngrediente } from './api'

function App() {
  return (
    <h1>Cockteleando</h1>
  )
}


function BusquedaNombre() {
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
          <input id="buttonFind" type="submit" value="Send Request" />
        </div>
      </form>
      <img src={img} />
      <p>{bebida}</p>
    </div>
  )
}



function BusquedaIngrediente() {
  const [list, setList] = useState('')
  const [ingredientFin, setIngredientFin] = useState('')

  let listIngredients;
  let seleccion;
  let listIngredientFind;

  async function onclick(e) {
    seleccion = await e
    seleccion = await seleccion.target.innerText
    let ingredientFind = await BuscarIngrediente(seleccion)
    ingredientFind = await ingredientFind.drinks

    listIngredientFind = await ingredientFind.map((number) =>
      <li key={number.strDrink}>{number.strDrink}</li>
    )
    await setIngredientFin(listIngredientFind)
  }


  ingredientAll()
  async function ingredientAll() {
    let all = await Ingredientes()
    all = all.drinks
    listIngredients = await all.map((number) =>
      <option key={number.strIngredient1} value={number.strIngredient1}>{number.strIngredient1}</option>
    )
    await setList(listIngredients)
  }


  return (
    <div>
      <div>
        <h3>Busqueda por ingrediente</h3>
        <select name="ingrediente" id="ingrediente" onClick={onclick}>
          <option value="" selected>Seleccione un ingrediente</option>
          {list}
        </select>
      </div>
      <div>
        <h4>Listado de bebidas por ingrediente</h4>
        <ul>
          {ingredientFin}
        </ul>
      </div>
    </div>
  )
}



function BusquedaLetra() {
  const [listado, setListado] = useState('')

  let listItems;
  async function linkLetter(e) {
    let letra = e.target.attributes[0].nodeValue
    let bebidaLetter = await BuscarLetra(letra)
    bebidaLetter = bebidaLetter.drinks

    listItems = bebidaLetter.map((number) =>
      <li key={number.strDrink}>{number.strDrink}</li>
    )

    setListado(listItems)
  }


  return (
    <div>
      <h3>
        Busqueda de cocktail por letra
      </h3>
      <a onClick={linkLetter} value='A'> A </a>/
      <a onClick={linkLetter} value='B'> B </a>/
      <a onClick={linkLetter} value='C'> C </a>/
      <a onClick={linkLetter} value='D'> D </a>/
      <a onClick={linkLetter} value='E'> E </a>/
      <a onClick={linkLetter} value='F'> F </a>/
      <a onClick={linkLetter} value='G'> G </a>/
      <a onClick={linkLetter} value='H'> H </a>/
      <a onClick={linkLetter} value='I'> I </a>/
      <a onClick={linkLetter} value='J'> J </a>/
      <a onClick={linkLetter} value='K'> K </a>/
      <a onClick={linkLetter} value='L'> L </a>/
      <a onClick={linkLetter} value='M'> M </a>/
      <a onClick={linkLetter} value='N'> N </a>/
      <a onClick={linkLetter} value='O'> O </a>/
      <a onClick={linkLetter} value='P'> P </a>/
      <a onClick={linkLetter} value='Q'> Q </a>/
      <a onClick={linkLetter} value='R'> R </a>/
      <a onClick={linkLetter} value='S'> S </a>/
      <a onClick={linkLetter} value='T'> T </a>/
      <a onClick={linkLetter} value='U'> U </a>/
      <a onClick={linkLetter} value='V'> V </a>/
      <a onClick={linkLetter} value='W'> W </a>/
      <a onClick={linkLetter} value='X'> X </a>/
      <a onClick={linkLetter} value='Y'> Y </a>/
      <a onClick={linkLetter} value='Z'> Z </a>
      <br />
      <div>
        <h4>Listado por letra</h4>
        <ul>
          {listado}
        </ul>
      </div>
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
  BusquedaNombre,
  BusquedaIngrediente,
  BusquedaLetra,
  Random_f
} 
