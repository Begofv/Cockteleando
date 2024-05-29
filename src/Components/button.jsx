// generic and exportable button component
import PropTypes from 'prop-types';
import './button.css';  // import stylesheet        

export default function Button({ text, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    );
}       

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}   
