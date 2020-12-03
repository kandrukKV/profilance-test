import {UserTypes, MONTHS} from './const';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const checkUser = (currentUser, users) => {
  if (!currentUser) {
    return null;
  };

  const result = users.find(user => (user.login === currentUser.login) && (user.password === currentUser.password));

  if (result) {
    return result;
  }

  throw new Error(`login_error`);
};

export const filteredNews = (news, currentUser) => {
  if (!currentUser) {
    return news.filter((item) => item.isApproved);
  };

  switch (currentUser.type) {
    case UserTypes.ADMIN:
      return news;
    case UserTypes.USER:
      return news.filter((item) => {
        return (currentUser.id === item.authorId) || item.isApproved
      })
    default:
      return news;
  };
};

export const deleteNews = (news, newsId) => {
  const index = news.findIndex((item) => item.id === newsId);
  if (index > -1) {
    return [
      ...news.slice(0, index),
      ...news.slice(index + 1)
    ];
  }
  return news;
};

export const addNews = (news, newNews) => {
  return [...news, newNews];
};

export const approvedNews = (news, newsId) => {
  const index = news.findIndex((item) => item.id === newsId);
  if (index > -1) {
    const newItem = extend(news[index], {
      isApproved: true
    });
    return [
      ...news.slice(0, index),
      newItem,
      ...news.slice(index + 1)
    ]
  }
  return news;
};

export const convertDate = (date) => {
  const currentDate = new Date(date);
  return `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
};

export const search = (news, term) => {
  if (term.length === 0) {
    return news;
  };
  
  return news.filter((item) => item.title.indexOf(term) > -1 || item.content.indexOf(term) > -1);
};
