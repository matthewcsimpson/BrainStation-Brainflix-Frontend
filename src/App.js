// TEMP
import userimg from "./assets/images/Mohan-muruge.jpg";
import bflogo from "./assets/images/BrainFlix-logo.svg";
import upld from "./assets/images/Icons/upload.svg";

// DATA
// import videoList from "./data/videos.json";
import videoDetails from "./data/video-details-enhanced.json";
import videos from "./data/videos.json";

// Libraries
import { useState } from "react";

// Components
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import CommentsList from "./components/CommentsList/CommentsList";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[8]);
  // eslint-disable-next-line no-unused-vars
  const [videoArray] = useState(videos);

  /**
   * Function to handle setting the selected video.
   * Takes an incoming video ID and uses it to search for a specific video.
   * @param {string} selectedID
   */
  // eslint-disable-next-line no-unused-vars
  const handleVideoSelection = (selectedID) => {
    setSelectedVideo(videoDetails.find((video) => video.id === selectedID));
  };

  return (
    <div className="bf__wrapper">
      <Header userimg={userimg} bflogo={bflogo} upld={upld} />
      <div className="details__flexwrapper">
        <CurrentVideo videoDetails={selectedVideo} />
        <CommentsList selectedVideo={selectedVideo} />
      </div>
      <VideoList
        selectedVideo={selectedVideo}
        videoArray={videos}
        handleVideoSelection={handleVideoSelection}
      />
      {/* -------------------------------- WORKING ON NOW */}

      {/* -------------------------------- TO BE WORKED ON */}
    </div>
  );
}

export default App;
