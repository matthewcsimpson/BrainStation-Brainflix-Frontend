import "./VideoList.scss";
import Video from "./Video/Video";

function VideoList({ selectedVideo, videoArray, handleVideoSelection }) {
  return (
    <div className="videoslist">
      <div className="videoslist__wrapper">
        <p className="videoslist__heading">Next Videos</p>
        {videoArray
          .filter((video) => video.id !== selectedVideo.id)
          .map((video) => {
            return (
              <Video
                key={video.id}
                vid={video}
                handleVideoSelection={() => handleVideoSelection(video.id)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default VideoList;
