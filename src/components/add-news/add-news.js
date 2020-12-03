import './add-news.css';
import {useState} from 'react';
import NewsBtn from '../news-btn/news-btn';


const AddNews = ({onSubmitAddForm, currentUser}) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    onSubmitAddForm({
      id: `f${(~~(Math.random()*1e8)).toString(16)}`,
      title,
      content,
      date: (new Date()).toISOString(),
      authorId: currentUser.id,
      isApproved: false
    });
    setTitle('');
    setContent('');
  }

  const changeTitleHandle = (evt) => {
    setTitle(evt.target.value);
  };

  const changeContentHandle = (evt) => {
    setContent(evt.target.value);
  }

  return (
    <form className="add__new" onSubmit={onSubmitForm}>
      <h2 className="add-new__head">Добавить новость</h2>
      <div className="add-new__row">
        <label className="add-new__label" htmlFor="new_title">Название новости:</label>
        <input className="add-new__input" id="new_title" type="text" onChange={changeTitleHandle} value={title}/>
      </div>
      <div className="add-new__row">
        <label className="add-new__label" htmlFor="new_content">Текст новости:</label>
        <textarea className="add-new__textarea" id="new_content" type="text" onChange={changeContentHandle} value={content}/>
      </div>
      <div className="add-new__row">
        <NewsBtn 
          btnType={'submit'}
          title={'Добавить'}
          isDisabledBtn={!title || !content}
        />
      </div>
    </form>
  );
}

export default AddNews;
