// Style
import "./SiteButton.scss";

function SiteButton({ icon, buttonType, buttonName, classModifier, clickHandler }) {
  return (
    <button
      className={`glbl__button ${classModifier}`}
      type={buttonType}
      onClick={() => clickHandler()}
    >
      <img className="glbl__button__image" src={icon} alt="" />
      <span className="glbl__button__text">{buttonName}</span>
      <span className="glbl__button__spacer"></span>
    </button>
  );
}

export default SiteButton;
