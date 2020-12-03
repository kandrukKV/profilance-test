import {useState} from 'react';
import './login.css';
import NewsBtn from '../news-btn/news-btn';

const Login = ({onFormSubmit, onClickCloseBtn, isErrorLogin}) => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const formSubmitHandle = (evt) => {
    evt.preventDefault();
    onFormSubmit({login, password});
  }

  const onChangeLoginHandle = (evt) => {
    setLogin(evt.target.value)
  }

  const onChangePasswordHandle = (evt) => {
    setPassword(evt.target.value)
  }

  return (
    <div className="login">
      <span className="login__close" onClick={onClickCloseBtn}></span>
      <h3>Авторизация</h3>
      <form className="login__form" onSubmit={formSubmitHandle}>
        <div className="login__row">
          <label className="login__label" htmlFor="login">Логин:</label>
          <input
            className="login__input"
            id="login"
            type="text"
            value={login}
            onChange={onChangeLoginHandle}
          />
        </div>
        <div className="login__row">
          <label className="login__label" htmlFor="pass">Пароль:</label>
          <input
            className="login__input"
            id="pass"
            type="password"
            value={password}
            onChange={onChangePasswordHandle}
          />
        </div>

        {
          isErrorLogin && <div className="login__row login__error">Неверная пара логин/пароль</div>
        }

        <div className="login__row">
          <NewsBtn
            btnType={'submit'}
            title={`Отправить`}
            isDisabledBtn={!login || !password}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
