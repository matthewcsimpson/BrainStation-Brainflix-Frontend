import bflogo from "./assets/images/BrainFlix-logo.svg";
import userimg from "./assets/images/Mohan-muruge.jpg";

function App() {
  return (
    <div className="bf__wrapper">
      <header classname="header">
        <img src={bflogo} alt="BrainFlix" className="header__logo" />
        <input
          type="search"
          placeholder="Search..."
          className="header__searchbar"
        ></input>
        <div className="glbl__user-avatar header__avatar">
          <img
            className="glbl__user-avatar header__avatar"
            alt="User Img"
            src={userimg}
          ></img>
          <button className="glbl__button header__uploadbutton">Upload</button>
        </div>
      </header>
      <div className="hero"></div>
      <div className="flexwrapper">
        <section className="details"></section>
        <div className="comments"></div>
        <div className="nextvideos"></div>
      </div>
    </div>
  );
}

export default App;
