import './header.css';
import {useState} from 'react';
import NavMenu from '../nav-menu/nav-menu';
import NewsBtn from '../news-btn/news-btn';
import Login from '../login/login';



const Header = ({currentUser, setUser}) => {

  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isErrorLogin, setIsErrorLogin] = useState(false);

  const closeLoginFormHandle = () => {
    setIsLoginFormOpen(false);
  }

  const openLoginFormHandle = () => {
    setIsLoginFormOpen(true);
  }

  const exitUser = () => {
    setUser(null);
  }

  const formSubmitHandle = (user) => {
    new Promise((resolve, reject) => {
      setUser(user);
      setIsErrorLogin(false);
      resolve();
    })
    .then(() => {
      setIsLoginFormOpen(false)
    })
    .catch(() => setIsErrorLogin(true))
  }

  return (
    <header className="header container">
      <NavMenu/>
      <NewsBtn
        title={
          currentUser
          ? 'Выход'
          : 'Вход'
        }
        onBtnClick={
          currentUser
          ? exitUser
          : openLoginFormHandle
        }
        isDisabledBtn={isLoginFormOpen}
      />
      {
        isLoginFormOpen
        ? <Login
            onFormSubmit={formSubmitHandle}
            onClickCloseBtn={closeLoginFormHandle}
            isErrorLogin={isErrorLogin}
          />
        : null
      }
    </header>
  );
}


export default Header;
