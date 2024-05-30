import { useState } from 'react'
import './modal.css'
import Modal from './modal'

const Modales = ()=> {

    const [mostrar, setMostrar] = useState(false)

    return (
        <div>
           <h1>Modales</h1>
           <button onClick={() => setMostrar(true)}>Ver modal</button>
           <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
                <h1>Estoy en el modal pruba de children, meter aqui la info de la api</h1>
            </Modal>
        </div>
    )
}

export {
    Modales
}
