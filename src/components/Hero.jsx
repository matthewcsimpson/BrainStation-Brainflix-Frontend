function Hero(props) {
  return (
    <div className="hero">
      <video className="hero__video" controls poster={props.poster}>
        <source src={props.video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
