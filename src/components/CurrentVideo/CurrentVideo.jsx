import "./CurrentVideo.scss";

import Hero from "../Hero";
import VideoDetails from "../VideoDetails";

function CurrentVideo({ videoDetails }) {
  return (
    <>
      <Hero video={videoDetails.video} poster={videoDetails.image} />
      <VideoDetails selectedVideo={videoDetails} />
    </>
  );
}

export default CurrentVideo;
