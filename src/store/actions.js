export const ActionsType = {
  SET_USER: 'SET_USER',
  LOAD_NEWS: 'LOAD_NEWS',
  ADD_NEWS: 'ADD_NEWS',
  APPROVED_NEWS: 'APPROVED_NEWS',
  DELETE_NEWS: 'DELETE_NEWS'
};

export const setUserAction = (user) => {
  return {
    type: ActionsType.SET_USER,
    payload: user
  }
};

export const loadNewsAction = () => ({
  type: ActionsType.LOAD_NEWS
});

export const addNewsAction = (news) => ({
  type: ActionsType.ADD_NEWS,
  payload: news
});

export const approvedNewsAction = (newsId) => ({
  type: ActionsType.APPROVED_NEWS,
  payload: newsId
});

export const deleteNewsAction = (newsId) => ({
  type: ActionsType.DELETE_NEWS,
  payload: newsId
});
