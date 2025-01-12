import React from 'react';

const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <button onClick={onClick} className={`favorite-button ${isFavorite ? 'favorite' : ''}`}>
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </button>
  );
};

export default FavoriteButton;