import './modal.css'

const Modal = ({isOpen, onClose, children})=> {

    return (
        <div className="modal" style={{display: isOpen ? 'grid' : 'none'}}>
            <div className="modal-container">
                <button className="modal-close" onClick={onClose}>X</button>
                {children}            
            </div>
        </div>
    )
}

export default Modal