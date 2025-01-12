import React from 'react';
import { connect } from 'react-redux';
import { removeFavorite } from './actions';
import './App.css';

const Favorites = ({ favorites, removeFavorite }) => {
  const defaultImage = "https://img.freepik.com/premium-photo/mexican-food_1091302-45415.jpg?semt=ais_hybrid";

  return (
    <div className="restaurant-list">
      {favorites.length > 0 ? (
        favorites.map((restaurant, index) => (
          <div key={index} className="restaurant-item">
            <img src={restaurant.image_url || defaultImage} alt={restaurant.name} className="restaurant-image" />
            <p className="restaurant-name">{restaurant.name}</p>
            <button onClick={() => removeFavorite(restaurant.id)} className="remove-button">Remove</button>
          </div>
        ))
      ) : (
        <p>No favorites selected.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.restaurant.favorites
});

const mapDispatchToProps = {
  removeFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);