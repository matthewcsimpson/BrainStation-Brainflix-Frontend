// Components
import Hero from "../components/Hero/Hero";
import CurrentVideo from "../components/CurrentVideo/CurrentVideo";
import CommentsList from "../components/CommentsList/CommentsList";
import VideoList from "../components/VideoList/VideoList";

// Libraries
import { useState } from "react";

// VideoData
import videoDetails from "../data/video-details-enhanced.json";
import videos from "../data/videos.json";

function VideoPage() {
  // eslint-disable-next-line no-unused-vars
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  // eslint-disable-next-line no-unused-vars
  const [videoArray] = useState(videos);
  return (
    <>
      <Hero video={selectedVideo.video} poster={selectedVideo.image} />
      <div className="bf__flexwrapper">
        <div className="bf__subwrapper">
          <CurrentVideo videoDetails={selectedVideo} />
          <CommentsList selectedVideo={selectedVideo} />
        </div>
        <VideoList selectedVideo={selectedVideo} videoArray={videos} />
      </div>
    </>
  );
}

export default VideoPage;
