//Styles
import "./Hero.scss";

function Hero(props) {
  return (
    <div className="hero">
      <video className="hero__video" controls poster={props.poster}></video>
    </div>
  );
}

export default Hero;

/**
 * Note: these lines of code can be added to make the player functional.
 * Leaving them in so I don't have to remember them later.
 */

// import api_key from "../../../data/api_data.json";
// const videourl = `${video}?api_key=${api_key}`;
/* <source src={videourl} type="video/mp4" /> */
