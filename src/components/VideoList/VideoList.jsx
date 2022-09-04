// Styles
import "./VideoList.scss";

// Components
import SiteVideo from "../SiteVideo/SiteVideo";

// Libraries
import { Link } from "react-router-dom";

function VideoList({ selectedVideoId, videoArray }) {
  return (
    <div className="videoslist">
      <div className="videoslist__wrapper">
        <p className="videoslist__heading">Next Videos</p>
        {videoArray
          .filter((video) => video.id !== selectedVideoId)
          .map((video) => {
            return (
              <Link to={`/video/${video.id}`} key={video.id}>
                <SiteVideo key={video.id} vid={video} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default VideoList;
