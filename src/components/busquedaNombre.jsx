import { useState } from 'react'
import '../App.css'
import Modal from '../components/modal'

import { BuscarNombre } from '../api'

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


  export {
    BusquedaNombre
  }