import './search.css';

const Search = ({onSearchChange}) => {

  const changeInputHandle = (evt) => {
    onSearchChange(evt.target.value)
  }



  return (
    <div className="search">
      <label className="search__label" htmlFor="serch_news">Поиск:</label>
      <input className="serch__input" id="serch_news" type="text" onChange={changeInputHandle}/>
    </div>
  );
}

export default Search;
