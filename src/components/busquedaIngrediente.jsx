import { useState } from 'react'
import '../App.css'
import Modal from '../components/modal'

import { BuscarNombre, BuscarLetra, Random, Ingredientes, BuscarIngrediente } from '../api'


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


export {
  BusquedaIngrediente
}