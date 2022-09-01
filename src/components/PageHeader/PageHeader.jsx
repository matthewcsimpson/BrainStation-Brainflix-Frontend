// Styles
import "./Header.scss";

// Libraries
import { useNavigate } from "react-router-dom";

//Components
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";

function PageHeader({ bflogo, userImg, buttonIcon }) {
  let nav = useNavigate();

  /**
   * Function to navigate to the upload page when upload button is clicked.
   */
  const navigateToUploads = () => {
    nav("/upload");
  };

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
        <Avatar userImg={userImg} classModifier="header__avatar" />
        <Button
          buttonName="Upload"
          icon={buttonIcon}
          classModifier="header__button"
          clickHandler={navigateToUploads}
        />
      </form>
    </header>
  );
}

export default PageHeader;
