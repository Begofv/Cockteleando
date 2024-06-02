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

  let favsArray = allFavs.substring(0, allFavs.length - 1);
  favsArray = favsArray.split(','); 
  favsArray.sort();


  favsAPI()
  async function favsAPI() {
    for (let i = 0; favsArray.length > i; i++) {
      let buscarAPI = await BuscarNombre(favsArray[i])
      allAPIFind.push(buscarAPI)
    }

    let listItems = await allAPIFind.map((data) =>
      <div onClick={()=>{setData(data)}}>
            <p className='p-letra' key={data.strDrink}>{data.strDrink}</p>
      </div>
    )
    setListado(listItems)
  }

  


   

    return (
      <div>
        <div>
          <h1>{rotulo}</h1>
        </div>
        <div>
          {listado}
        </div>
      </div>
    )
     
  }


  export {
    Favoritos
  }