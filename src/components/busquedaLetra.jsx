import { useState } from 'react'
import '../App.css'
import Modal from '../components/modal'

import {BuscarLetra} from '../api'


function BusquedaLetra() {
    const [listado, setListado] = useState('')
    const [letraS, setLetraS] = useState('')
  
    let listItems;
    async function linkLetter(e) {
      let letra = e.target.attributes[0].nodeValue
  
      if (letra == letraS) {
        setListado('')
      } else {
        setLetraS(letra)
        let bebidaLetter = await BuscarLetra(letra)
        bebidaLetter = bebidaLetter.drinks
  
        listItems = bebidaLetter.map((number) =>
          <li key={number.strDrink}>{number.strDrink}</li>
        )
  
        setListado(listItems)
      }
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
          <ul>
            {listado}
          </ul>
        </div>
      </div>  
      )
  }

  
export {
    BusquedaLetra
}