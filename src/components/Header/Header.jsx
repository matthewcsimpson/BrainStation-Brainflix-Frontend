import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import "./Header.scss";

function Header({ bflogo, userimg, upld }) {
  return (
    <header className="header">
      <h1>
        <img src={bflogo} alt="BrainFlix" className="header__logo" />
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
          icon={upld}
          classModifier="header__button"
        />
      </form>
    </header>
  );
}

export default Header;
