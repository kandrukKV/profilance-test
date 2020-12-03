import './news.css';
import {useState} from 'react';
import Search from '../search/search';
import NewsList from '../news-list/news-list';
import AddNews from '../add-news/add-news';
import {connect} from 'react-redux';
import {UserTypes} from '../../const';
import {search} from '../../utils';
import {deleteNewsAction, addNewsAction, approvedNewsAction} from '../../store/actions';

const News = ({news, currentUser, deleteNews, addNews, approvedNews}) => {

  const [termSearch, setTermSearch] = useState('');

  const onSubmitAddForm = (news) => {
    addNews(news);
  };

  const onSearchChangeHandle = (value) => {
    setTermSearch(value);
  };

  return (
    <section className="news container">
      <h2 className="news__head">Новости</h2>
      <Search onSearchChange={onSearchChangeHandle}/>
      <NewsList
        news={search(news, termSearch)}
        currentUser={currentUser}
        deleteNews={deleteNews}
        approvedNews={approvedNews}
      />
      {
        currentUser
        && currentUser.type === UserTypes.USER
        && <AddNews onSubmitAddForm={onSubmitAddForm} currentUser={currentUser}/>
      }
    </section>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user,
  news: state.news
});

const mapDispatchToProps = (dispatch) => ({
  deleteNews(newsId) {
    dispatch(deleteNewsAction(newsId));
  },
  addNews(news) {
    dispatch(addNewsAction(news))
  },
  approvedNews(newsId) {
    dispatch(approvedNewsAction(newsId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
