import "./Button.scss";

function Button({ icon, buttonName, classModifier }) {
  return (
    <button className={`glbl__button ${classModifier}`} type="submit">
      <img className="glbl__button__image" src={icon} alt="" />
      <span className="glbl__button__text">{buttonName}</span>
      <span className="glbl__button__spacer"></span>
    </button>
  );
}

export default Button;
