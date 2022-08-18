import Hero from "./Hero";

function CurrentVideo(props) {
  console.log(props);
  return (
    <Hero video={props.videoDetails.video} poster={props.videoDetails.image} />
  );
}

export default CurrentVideo;
