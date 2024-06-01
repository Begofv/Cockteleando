import { useState } from 'react'
import '../App.css'
import { Modales } from './modales'
import Modal from './modal'


import {BuscarLetra} from '../api'


function BusquedaLetra() {
    const [listado, setListado] = useState('')
    const [letraS, setLetraS] = useState('')
    const [data,setData] = useState(null);
  
    let listItems;
    async function linkLetter(e) {
      let letra = e.target.attributes[1].nodeValue
  
      if (letra == letraS) {
        setListado('')
      } else {
        setLetraS(letra)
        let bebidaLetter = await BuscarLetra(letra)
        bebidaLetter = bebidaLetter.drinks
  
        listItems = bebidaLetter.map((number) =>
          <div onClick={()=>setData(data)}>
            <p className='p-letra' onClick={onclick} key={number.strDrink}>{number.strDrink}</p>
          </div>
        )
  
        setListado(listItems)
      }
    }

    async function onclick() {
      console.log('Click correcto')
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
        <div id='div-letra'>
          {listado}
        </div>
      </div>  
      )
  }

  
export {
    BusquedaLetra
}