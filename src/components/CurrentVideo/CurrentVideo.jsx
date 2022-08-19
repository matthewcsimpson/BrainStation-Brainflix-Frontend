import "./CurrentVideo.scss";

import Hero from "./Hero/Hero";
import VideoDetails from "./VideoDetails/VideoDetails";

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
