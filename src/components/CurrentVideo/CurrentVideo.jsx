import "./CurrentVideo.scss";

import Hero from "./Hero/Hero";
import VideoDetails from "./VideoDetails/VideoDetails";

function CurrentVideo({ videoDetails }) {
  return (
    <div className="currentvideo__flexwrapper">
      <Hero video={videoDetails.video} poster={videoDetails.image} />
      <section className="details">
        <VideoDetails selectedVideo={videoDetails} />
      </section>
    </div>
  );
}

export default CurrentVideo;
