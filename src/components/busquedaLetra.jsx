import { useState } from 'react'
import '../App.css'
import { Modales } from './modales'
import Modal from './modal'
import { Favoritos } from './favoritos'

import {BuscarLetra} from '../api'


function BusquedaLetra() {
    const [listado, setListado] = useState('')
    const [letraS, setLetraS] = useState('')
    const [data,setData] = useState(null);
    const [rotuloFav,setRotuloFav] = useState('');

    let allFav = localStorage.getItem('favs')
    if (allFav == null) {
      localStorage.setItem('favs', '')
    }
  
    let listItems;
    async function linkLetter(e) {
      let letra = e.target.attributes[1].nodeValue
  
      if (letra == letraS) {
        setListado('')
        setLetraS('')
      } else {
        setLetraS(letra)
        let bebidaLetter = await BuscarLetra(letra)
        bebidaLetter = await bebidaLetter.drinks
  
        listItems = await bebidaLetter.map((data) =>
          <div onClick={()=>{
            setData(data)
            revisar(data)}}>
                <p className='p-letra' key={data.strDrink}>{data.strDrink}</p>
          </div>
        )
  
        setListado(listItems)
      }
    }


    function onFavs(e) {
      let nameFav = e.target.value
  
      if (allFav.includes(nameFav)) {
        allFav = allFav.replace(`${nameFav},`,'')
        localStorage.setItem('favs', allFav)
        setRotuloFav('Añadir a favorito')
      } else {
        allFav = allFav + `${nameFav},`
        localStorage.setItem('favs', allFav)
        setRotuloFav('Quitar a favorito')
      }
    }



    function revisar(e) {
      let revisarFav = e.strDrink
  
      if (allFav.includes(revisarFav)) {
        setRotuloFav('Quitar a favorito')
      } else {
        setRotuloFav('Añadir a favorito')
      }
   }

   
  
    return (
      <div>
        <h3>
          Busqueda de cocktail por letra
        </h3>
        <a className='a-letra' onClick={linkLetter} value='A'> A </a>/
        <a className='a-letra' onClick={linkLetter} value='B'> B </a>/
        <a className='a-letra' onClick={linkLetter} value='C'> C </a>/
        <a className='a-letra' onClick={linkLetter} value='D'> D </a>/
        <a className='a-letra' onClick={linkLetter} value='E'> E </a>/
        <a className='a-letra' onClick={linkLetter} value='F'> F </a>/
        <a className='a-letra' onClick={linkLetter} value='G'> G </a>/
        <a className='a-letra' onClick={linkLetter} value='H'> H </a>/
        <a className='a-letra' onClick={linkLetter} value='I'> I </a>/
        <a className='a-letra' onClick={linkLetter} value='J'> J </a>/
        <a className='a-letra' onClick={linkLetter} value='K'> K </a>/
        <a className='a-letra' onClick={linkLetter} value='L'> L </a>/
        <a className='a-letra' onClick={linkLetter} value='M'> M </a>/
        <a className='a-letra' onClick={linkLetter} value='N'> N </a>/
        <a className='a-letra' onClick={linkLetter} value='O'> O </a>/
        <a className='a-letra' onClick={linkLetter} value='P'> P </a>/
        <a className='a-letra' onClick={linkLetter} value='Q'> Q </a>/
        <a className='a-letra' onClick={linkLetter} value='R'> R </a>/
        <a className='a-letra' onClick={linkLetter} value='S'> S </a>/
        <a className='a-letra' onClick={linkLetter} value='T'> T </a>/
        <a className='a-letra' onClick={linkLetter} value='U'> U </a>/
        <a className='a-letra' onClick={linkLetter} value='V'> V </a>/
        <a className='a-letra' onClick={linkLetter} value='W'> W </a>/
        <a className='a-letra' onClick={linkLetter} value='X'> X </a>/
        <a className='a-letra' onClick={linkLetter} value='Y'> Y </a>/
        <a className='a-letra' onClick={linkLetter} value='Z'> Z </a>
        <br />

        {data &&
          <Modal isOpen={true} onClose={()=> {
            setData(null)
            setRotuloFav('Favorito')}}>
            <div id="modalNombre">
              <div id="divModalNombre">
                <h1 id='h1Modal'>{data.strDrink}</h1>
                <h4>Category: {data.strCategory}</h4>
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
                  <button id='buttonFav' value={data.strDrink} onClick={onFavs}>{rotuloFav}</button>
                </div>
                <div id="divModalIMG">
                  <img src={data.strDrinkThumb} />
                </div>
              </div>
            </div>
          </Modal>
        }

        <div id='div-letra'>
          {listado}
        </div>
      </div>  
      )
  }

  
export {
    BusquedaLetra
}