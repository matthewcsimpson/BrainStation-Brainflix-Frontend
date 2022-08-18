// TEMP
import userimg from "./assets/images/Mohan-muruge.jpg";
import bflogo from "./assets/images/BrainFlix-logo.svg";
import upld from "./assets/images/Icons/upload.svg";

// DATA
// import videoList from "./data/videos.json";
import videoDetails from "./data/video-details-enhanced.json";

// Libraries
import { useState } from "react";

// Components
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";

function App() {
  const [selectedVideo] = useState(videoDetails[0]);
  // setSelectedVideo

  return (
    <div className="bf__wrapper">
      <Header userimg={userimg} bflogo={bflogo} upld={upld} />
      <CurrentVideo videoDetails={selectedVideo} />

      {/* -------------------------------- WORKING ON NOW */}

      <div className="comments">
        <form className="comments__form">
          <div className="glbl__user-avatar"></div>
          <div></div>
          <div></div>
        </form>
      </div>

      {/* -------------------------------- TO BE WORKED ON */}

      <div className="nextvideos"></div>
    </div>
  );
}

export default App;
