import { useState } from 'react'
import '../App.css'
import './modal.css'
import Modal from './modal'
import { Modales } from './modales'

import { BuscarNombre } from '../api'

function BusquedaNombre() {
    const [img, setImg] = useState('')

    let listImg;
    let listName;
  
    async function buttonOnsubmitHandler(e) {
      e.preventDefault()
      let nombre = e.target[0].value;
      let result = await BuscarNombre(nombre)
      result = await result.drinks

      listImg = await result.map((data) =>
        <div>
          <p key={data.strDrink}>{data.strDrink}</p>
          <img id='imgNombre' src={data.strDrinkThumb} key={data.strDrinkThumb} />
        </div>
      )


      setImg(listImg)
    } 


  function buttonDelete() {
    setImg('')
  }
  
  
    return (
      <div>
        <form onSubmit={buttonOnsubmitHandler}>
          <div>
            <h3>Nombre de cocktail</h3>
            <label htmlFor="nombre" />
            <input type='text' placeholder='Nombre' name='nombre' />
          </div>
          <br />  
          <div>
            <input id="buttonFind" type="submit" value="Buscar" />
          </div>
        </form>
        <input id="buttonDelete" type='button' value="Borrar" onClick={buttonDelete} />
        <br />
        <br />
        <div>
          {img}
        </div>
      </div>
    )
  }


  export {
    BusquedaNombre
  }