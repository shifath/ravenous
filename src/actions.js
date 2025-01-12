export const SET_RESTAURANTS = 'SET_RESTAURANTS';
export const SET_ERROR = 'SET_ERROR';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const setRestaurants = (restaurants) => ({
  type: SET_RESTAURANTS,
  payload: restaurants
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});

export const toggleFavorite = (restaurant) => ({
  type: TOGGLE_FAVORITE,
  payload: restaurant
});

export const removeFavorite = (restaurantId) => ({
  type: REMOVE_FAVORITE,
  payload: restaurantId
});