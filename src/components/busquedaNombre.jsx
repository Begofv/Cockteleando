import { useState } from 'react'
import '../App.css'
import './modal.css'
import Modal from './modal'
import { Modales } from './modales'
import { BuscarNombre } from '../api'
import { CocktailCard } from './CocktailCard'


function BusquedaNombre() {
  const [img, setImg] = useState('')
  const [data,setData] = useState(null);
  let delIMG = document.getElementById('izquierda')

  let listImg;
  
  async function buttonOnsubmitHandler(e) {
    e.preventDefault()
    delIMG.innerHTML = ''

    let nombre = e.target[0].value;
    let result = await BuscarNombre(nombre)
    result = await result.drinks

    listImg = await result.map((data) =>
      <div onClick={()=>setData(data)}>
        <p id='pNombre' key={data.strDrink}>{data.strDrink}</p>
        <img id='imgNombre' onClick={onclick} src={data.strDrinkThumb} key={data.strDrinkThumb} />
      </div>
    )
    setImg(listImg)
  } 


  async function onclick() {
    console.log('Click correcto')
  }


  function buttonDelete(e) {
    e.preventDefault()
    setImg('')
    delIMG.innerHTML = '<img src="/imgs/drink-4188629_1280.jpg" alt="bebida" className="imgIndex" />'
    let inputDel = document.getElementById('inputName')
    inputDel.value = ''
  }
  
  
    return (
      <div>
        <form onSubmit={buttonOnsubmitHandler}>
          <div>
            <h3>Nombre de cocktail</h3>
            <label htmlFor="nombre" />
            <input id='inputName' type='text' placeholder='Nombre' name='nombre' />
          </div>
          <br />  
          <div>
            <input id="buttonFind" className='buttonName' type="submit" value="Buscar" />
            <input id="buttonDelete" className='buttonName' type='button' value="Borrar" onClick={buttonDelete} />
          </div>
        </form>
        <br />
        <br />
        {data &&
          <Modal isOpen={true} onClose={()=>setData(null)}>
            <div className='modal'>
              <div className='modal-container'>
                <div className='nombre'>
                  <h1>{data.strDrink}</h1>
                </div>
                <div className='instructions'>
                  <p>{data.strInstructions}</p>
                </div>
                <div className='ingredientes'>
                  <p>{data.strIngredient}</p>
                </div>
                <div className='imagen'>
                  <img id="miImagenId" className="miImagenId"
                  src={data.strDrinkThumb}
                  alt={data.strDrink}
                  />
                </div>
              </div>
            </div>
          </Modal>
        }
        
        <div id='div-img'>
          {img}
        </div>  
      </div>
    )
  }


  export {
    BusquedaNombre
  }