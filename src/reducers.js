import { combineReducers } from 'redux';
import { SET_RESTAURANTS, SET_ERROR, TOGGLE_FAVORITE, REMOVE_FAVORITE } from './actions';

const initialState = {
  restaurants: [],
  favorites: [],
  error: null
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return { ...state, restaurants: action.payload, error: null };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case TOGGLE_FAVORITE:
      const isFavorite = state.favorites.some(fav => fav.id === action.payload.id);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter(fav => fav.id !== action.payload.id)
          : [...state.favorites, action.payload]
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload)
      };
    default:
      return state;
  }
};

export default combineReducers({
  restaurant: restaurantReducer
});