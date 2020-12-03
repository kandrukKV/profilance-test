import './news-list.css';
import NewsBtn from '../news-btn/news-btn';
import {UserTypes} from '../../const';
import {filteredNews, convertDate} from '../../utils';

const NewsList = ({news, currentUser, deleteNews, approvedNews}) => {

  return (
    <ul className="news__list">
      {
        filteredNews(news, currentUser).map((item) => {
          return (
            <li key={`news-${item.id}`} className="news__item">
              <h3 className="news__title">{item.title}</h3>
              <p className="news__content">{item.content} {!item.isApproved && (<span className="news__select">На модерации</span>)}</p>
              <p className="news__date">{convertDate(item.date)}</p>
              <div className="news__conttrol">
                {
                  currentUser 
                  && currentUser.type === UserTypes.ADMIN
                  && !item.isApproved 
                  && <NewsBtn
                    title={'Одобрить'}
                    onBtnClick={() => approvedNews(item.id)}
                  />
                }

                { 
                  currentUser 
                  && currentUser.type === UserTypes.ADMIN 
                  && <NewsBtn
                    title={'Удалить'}
                    addClassName={'news__btn--warning'}
                    onBtnClick={() => deleteNews(item.id)}
                  />
                }
                
              </div>
            </li>
          );
        })
      }
      
    </ul>
  );
};

export default NewsList;
