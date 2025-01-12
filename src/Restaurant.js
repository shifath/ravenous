import React from 'react';
import { connect } from 'react-redux';
import { setRestaurants, setError, toggleFavorite } from './actions';
import FavoriteButton from './FavoriteButton';
import './App.css';

class Restaurant extends React.Component {
  async componentDidMount() {
    await this.getRestaurant();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm || prevProps.location !== this.props.location) {
      await this.getRestaurant();
    }
  }

  getRestaurant = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const { searchTerm, location, setRestaurants, setError } = this.props;
    if (!searchTerm || !location) return;

    try {
      const res = await fetch(`https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      });
      if (!res.ok) {
        throw new Error('Cannot fetch data');
      }
      const restaurant = await res.json();
      setRestaurants(restaurant.businesses.slice(0, 10));
    } catch (error) {
      setError(error.message);
    }
  }

  render() {
    const { restaurants, error, favorites, toggleFavorite } = this.props;
    const defaultImage = "https://img.freepik.com/premium-photo/mexican-food_1091302-45415.jpg?semt=ais_hybrid";

    return (
      <div className="restaurant-list">
        {error && <p className="error-message">{error}</p>}
        {restaurants.length > 0 && restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-item">
            <img src={restaurant.image_url || defaultImage} alt={restaurant.name} className="restaurant-image" />
            <p className="restaurant-name">{restaurant.name}</p>
            <FavoriteButton
              isFavorite={favorites.some(fav => fav.id === restaurant.id)}
              onClick={() => toggleFavorite(restaurant)}
            />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurant.restaurants,
  favorites: state.restaurant.favorites,
  error: state.restaurant.error
});

const mapDispatchToProps = {
  setRestaurants,
  setError,
  toggleFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);