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
import CurrentVideo from "./components/CurrentVideo";
/**
 * reminder: to build string to access video
 * const API_KEY = "?api_key=bd6be8d0-bde7-4b66-848d-bccaa5394a3a";
 * const videoString = `${videoDetails[0].video}${API_KEY}`;
 * <Hero video={videoString} poster={videoDetails[0].image} />
 */

function App() {
  const [selectedVideo] = useState(videoDetails[0]);
  // setSelectedVideo

  return (
    <div className="bf__wrapper">
      <Header userimg={userimg} bflogo={bflogo} upld={upld} />
      <CurrentVideo videoDetails={selectedVideo} />

      {/* -------------------------------- WORKING ON NOW */}

      <div className="details__comments"></div>

      {/* -------------------------------- TO BE WORKED ON */}

      <div className="nextvideos"></div>
    </div>
  );
}

export default App;
