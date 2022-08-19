import "./CurrentVideo.scss";

import Hero from "../Hero";
import VideoDetails from "../VideoDetails";

function CurrentVideo({ videoDetails }) {
  return (
    <>
      <Hero video={videoDetails.video} poster={videoDetails.image} />
      <section className="details">
        <VideoDetails selectedVideo={videoDetails} />
      </section>
    </>
  );
}

export default CurrentVideo;
