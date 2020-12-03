import {ActionsType} from './actions';
import {news, users} from '../mocks/mocks';
import {checkUser, extend, addNews, deleteNews, approvedNews} from '../utils';

const initialState = {
  news: [],
  user: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.SET_USER:
      const currentUser = checkUser(action.payload, users);
      return extend(state, {
        user: currentUser ? currentUser : null
      });
    case ActionsType.LOAD_NEWS:
      return extend(state, {
        news
      })
    case ActionsType.ADD_NEWS:
      return extend(state, {
        news: addNews(state.news, action.payload)
      })
    case ActionsType.DELETE_NEWS:
      return extend(state, {
        news: deleteNews(state.news, action.payload)
      });
    case ActionsType.APPROVED_NEWS:
      return extend(state, {
        news: approvedNews(state.news, action.payload)
      });
    default:
      return state;
  }
} 
