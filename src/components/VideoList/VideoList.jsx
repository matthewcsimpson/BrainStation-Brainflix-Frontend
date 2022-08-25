import "./VideoList.scss";
import Video from "../Video/Video";

import { Link } from "react-router-dom";

function VideoList({ selectedVideo, videoArray, handleVideoSelection }) {
  return (
    <div className="videoslist">
      <div className="videoslist__wrapper">
        <p className="videoslist__heading">Next Videos</p>
        {videoArray
          .filter((video) => video.id !== selectedVideo.id)
          .map((video) => {
            return (
              <Link to={`/video/${video.id}`} key={video.id}>
                <Video key={video.id} vid={video} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default VideoList;
