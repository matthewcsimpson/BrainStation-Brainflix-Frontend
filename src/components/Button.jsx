function Button(props) {
  return (
    <button className="glbl__button header__button">
      <img className="glbl__button__image" src={props.icon} alt="" />
      <span className="glbl__button__text">{props.buttonType}</span>
      <span className="glbl__button__spacer"></span>
    </button>
  );
}

export default Button;
