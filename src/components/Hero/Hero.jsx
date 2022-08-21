import "./Hero.scss";
// import api_key from "../../../data/api_data.json";

function Hero({ video, poster }) {
  // const videourl = `${video}?api_key=${api_key}`;
  return (
    <div className="hero">
      <video className="hero__video" controls poster={poster}>
        {/* <source src={videourl} type="video/mp4" /> */}
      </video>
    </div>
  );
}

export default Hero;
