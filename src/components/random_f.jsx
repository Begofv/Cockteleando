import { useState } from 'react'
import '../App.css'
import Modal from '../components/modal'

import { BuscarNombre, BuscarLetra, Random, Ingredientes, BuscarIngrediente } from '../api'


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
    Random_f
  }