/* import './modal.css'

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

export default Modal */


import './modal.css'
import PropTypes from 'prop-types';

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button id='buttonModal' onClick={onClose}>Cerrar</button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export {
  Modal
}

export default Modal