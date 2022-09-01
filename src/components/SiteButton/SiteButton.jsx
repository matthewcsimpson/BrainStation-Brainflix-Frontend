// Style
import "./SiteButton.scss";

function SiteButton({ icon, buttonName, classModifier, clickHandler }) {
  return (
    <button
      className={`glbl__button ${classModifier}`}
      type="submit"
      onClick={() => clickHandler()}
    >
      <img className="glbl__button__image" src={icon} alt="" />
      <span className="glbl__button__text">{buttonName}</span>
      <span className="glbl__button__spacer"></span>
    </button>
  );
}

export default SiteButton;
