import './app.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import {connect} from 'react-redux';
import Main from '../main/main';
import News from '../news/news';
import Header from '../header/header';
import Footer from '../footer/footer';
import {setUserAction} from '../../store/actions';

const App = (props) => {
  const {setUser, currentUser} = props;
  return (
    <BrowserRouter>
      <Header
        setUser={setUser}
        currentUser={currentUser}
      /> 
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            currentUser={currentUser}
          />
        </Route>
        <Route exact path={AppRoute.NEWS}>
          <News/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  setUser(user) {
    dispatch(setUserAction(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
