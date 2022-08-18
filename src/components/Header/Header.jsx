import Button from "../Button/Button";
import "./Header.scss";

function Header(props) {
  return (
    <header className="header">
      <h1>
        <img src={props.bflogo} alt="BrainFlix" className="header__logo" />
      </h1>
      <div className="header__right">
        <input
          type="search"
          placeholder="Search..."
          className="header__searchbar"
        ></input>
        <div className="glbl__user-avatar header__avatar">
          <img
            className="glbl__user-avatar"
            alt="User Img"
            src={props.userimg}
          ></img>
        </div>
        <Button buttonType="Upload" icon={props.upld} />
      </div>
    </header>
  );
}

export default Header;
