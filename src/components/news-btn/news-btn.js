import './news-btn.css';

const NewsBtn = (props) => {

  const {
    btnType='button',
    title = 'BTN',
    addClassName = '',
    isDisabledBtn = false,
    onBtnClick = () => {}
  } = props;

  return (
    <button
      className={`news__btn ${addClassName}`}
      type={btnType}
      onClick={onBtnClick}
      disabled={isDisabledBtn}
    >
      {title}
    </button>
  );
};

export default NewsBtn;
