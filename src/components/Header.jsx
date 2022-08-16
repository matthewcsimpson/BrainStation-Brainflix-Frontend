function Header(props) {
    return (
        <header className="header">
        <img src={props.bflogo} alt="BrainFlix" className="header__logo" />
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
          <button className="glbl__button header__button">
            <img className="glbl__button__image" src={props.upld} alt="" />
            <span className="glbl__button__text">Upload</span>
            <span className="glbl__button__spacer"></span>
          </button>
        </div>
      </header>
    )
}

export default Header;