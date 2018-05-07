import { ADD_ARTICLE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    default:
      return state;
  }
};
