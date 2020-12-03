import './main.css';

const Main = ({currentUser}) => {
  return (
    <section className="main container">
      <h2 className="main__head">Главная</h2>
      <h2 className="main__title">
        {`Привет, ${currentUser ? currentUser.login : 'Гость'}!`}
      </h2>
    </section>
  );
}


export default Main;
