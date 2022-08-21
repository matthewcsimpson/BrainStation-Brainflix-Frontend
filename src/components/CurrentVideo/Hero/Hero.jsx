import "./Hero.scss";

function Hero({ poster }) {
  return (
    <div className="hero">
      <video className="hero__video" controls poster={poster}>
        {/* <source src={video} type="video/mp4" /> */}
      </video>
    </div>
  );
}

export default Hero;
