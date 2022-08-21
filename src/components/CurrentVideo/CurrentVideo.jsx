import "./CurrentVideo.scss";

import VideoDetails from "./VideoDetails/VideoDetails";

function CurrentVideo({ videoDetails }) {
  return (
    <div className="currentvideo__flexwrapper">
      <section className="details">
        <VideoDetails selectedVideo={videoDetails} />
      </section>
    </div>
  );
}

export default CurrentVideo;
