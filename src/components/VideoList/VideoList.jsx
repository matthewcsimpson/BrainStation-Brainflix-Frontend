import "./VideoList.scss";
import Video from "./Video/Video";

function VideoList({ videoArray }) {
  return (
    <div className="videoslist">
      <div className="videoslist__wrapper">
        <p className="videoslist__heading">Next Videos</p>
        {videoArray.map((video) => {
          return <Video key={video.id} vid={video} />;
        })}
      </div>
    </div>
  );
}

export default VideoList;
