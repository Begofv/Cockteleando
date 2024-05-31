import PropTypes from 'prop-types';
import './CocktailCard.css';

function CocktailCard({ cocktail, onClose }) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    } else {
      break;
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Cerrar</button>
        <div className="modal-left">
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
        <div className="modal-right">
          <h2>{cocktail.strDrink}</h2>
          <p>{cocktail.strInstructions}</p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

CocktailCard.propTypes = {
  cocktail: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export {
  CocktailCard
}
