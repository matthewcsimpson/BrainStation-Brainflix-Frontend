import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import "./Header.scss";

function Header({ bflogo, userimg, buttonIcon }) {
  return (
    <header className="header">
      <h1>
        <a href="/">
          <img src={bflogo} alt="BrainFlix" className="header__logo" />
        </a>
      </h1>
      <form className="header__right">
        <input
          type="search"
          placeholder="Search..."
          className="header__searchbar"
        ></input>
        <Avatar userimg={userimg} classModifier="header__avatar" />
        <Button
          buttonName="Upload"
          icon={buttonIcon}
          classModifier="header__button"
        />
      </form>
    </header>
  );
}

export default Header;
