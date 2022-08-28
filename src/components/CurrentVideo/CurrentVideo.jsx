// styles
import "./CurrentVideo.scss";

// components
import CurrentVideoDetails from "../CurrentVideoDetails/CurrentVideoDetails";

function CurrentVideo({ videoDetails }) {
  return (
    <div className="currentvideo__flexwrapper">
      <section className="details">
        <CurrentVideoDetails selectedVideo={videoDetails} />
      </section>
    </div>
  );
}

export default CurrentVideo;
