//Styles
import "./Hero.scss";

// API info
const REACT_APP_LOCAL_API = process.env.REACT_APP_LOCAL_API;

function Hero({ poster, video }) {
  return (
    <div className="hero">
      <video
        className="hero__video"
        controls
        poster={`${REACT_APP_LOCAL_API}/${poster}`}
        src={`${REACT_APP_LOCAL_API}/${video}`}
        type="video/mp4"
      ></video>
    </div>
  );
}

export default Hero;

