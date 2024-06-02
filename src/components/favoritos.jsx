import { useState } from 'react'
import '../App.css'
import './modal.css'
import Modal from './modal'
import { Modales } from './modales'
import { BuscarNombre } from '../api'


function Favoritos() {
  const [favs, setFavs] = useState('')
  const [data, setData] = useState('')
  const [rotulo, setRotulo] = useState('Lista de favoritos')
  const [listado, setListado] = useState('')

  let favsState;
  let allAPIFind = [];
  let allFavs = localStorage.getItem('favs')
  let sizeFavs = allFavs.length

  if (allFavs == null) {
    localStorage.setItem('favs', '')
    setRotulo('')
  } else if (allFavs.lenght < 1) {
    setRotulo('')
  }


  function carga() {
    favsArray = allFavs.substring(0, allFavs.length - 1);
    favsArray = favsArray.split(','); 
    favsArray.sort();

    listItems = favsArray.map((data) =>
      <div onClick={()=>{setData(data)}}>
            <p onClick={favsAPI} className='p-letra' key={data} value={data}>{data}</p>
      </div>
    )
  }


  let favsArray = allFavs.substring(0, allFavs.length - 1);
  favsArray = favsArray.split(','); 
  favsArray.sort();


  async function favsAPI(name) {
    buscarAPI = await BuscarNombre(name.target.innerText)
    return buscarAPI
  }

  
  let listItems = favsArray.map((data) =>
    <div onClick={()=>{setData(data)}}>
          <p onClick={favsAPI} className='p-letra' key={data} value={data}>{data}</p>
    </div>
  )



   

    return (
      <div>
        <div>
          <h2 id='rotuloFavs' onClick={carga()}>{rotulo}</h2>
        </div>

        {data &&
          <Modal isOpen={true} onClose={()=> {setData(null)}}>
            <div id="modalNombre">
              <div id="divModalNombre">
                <h1 id='h1Modal'>{data}</h1>
                <h4>Category: {data}</h4>
                <p>{data.strInstructions}</p>
              </div>
              <div id='modalInferior'>
                <div id='divModalIngredientes'>
                  <h3>Ingredients</h3>
                  <p>{data.strIngredient1}    {data.strMeasure1}</p>
                  <p>{data.strIngredient2}    {data.strMeasure2}</p>
                  <p>{data.strIngredient3}    {data.strMeasure3}</p>
                  <p>{data.strIngredient4}    {data.strMeasure4}</p>
                  <p>{data.strIngredient5}    {data.strMeasure5}</p>
                  <p>{data.strIngredient6}    {data.strMeasure6}</p>
                  <p>{data.strIngredient7}    {data.strMeasure7}</p>
                  <p>{data.strIngredient8}    {data.strMeasure8}</p>
                </div>
                <div id="divModalIMG">
                  <img src={data.strDrinkThumb} />
                </div>
              </div>
            </div>
          </Modal>
        }

        <div id='favsList'>
          {listItems}
        </div>
      </div>
    )
     
  }


  export {
    Favoritos
  }