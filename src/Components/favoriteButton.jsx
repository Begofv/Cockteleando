import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

function FavoritesComponent({ cocktails }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (cocktail) => {
    const isDuplicate = favorites.some((favorite) => favorite.id === cocktail.id);

    if (isDuplicate) {
      Swal.fire('This cocktail is already in favorites!');
      return;
    }

    const updatedFavorites = [...favorites, cocktail];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    Swal.fire('Cocktail added to Favorites');
  };

  const removeFromFavorites = (cocktail) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== cocktail.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>Cocktails</h2>
      {cocktails.map((cocktail) => (
        <div key={cocktail.id}>
          {/* Renderizar detalles del cóctel */}
          <button onClick={() => addToFavorites(cocktail)}>Add to Favorites</button>
        </div>
      ))}

      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No cocktail added to Favorites</p>
      ) : (
        <div>
          {favorites.map((cocktail) => (
            <div key={cocktail.id}>
              {/* Renderizar la tarjeta del cóctel */}
              <button onClick={() => removeFromFavorites(cocktail)}>
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

FavoritesComponent.propTypes = {
  cocktails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default FavoritesComponent;