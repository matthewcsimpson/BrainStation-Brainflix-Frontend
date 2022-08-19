// TEMP
import userimg from "./assets/images/Mohan-muruge.jpg";
import bflogo from "./assets/images/BrainFlix-logo.svg";
import upld from "./assets/images/Icons/upload.svg";
import addcom from "./assets/images/Icons/add_comment.svg";

// DATA
// import videoList from "./data/videos.json";
import videoDetails from "./data/video-details-enhanced.json";

// Libraries
import { useState } from "react";

// Components
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import Button from "./components/Button/Button";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

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
      <CurrentVideo videoDetails={selectedVideo} />

      {/* -------------------------------- WORKING ON NOW */}

      <div className="comments">
        <form className="comments__form">
          <div>
            <label
              htmlFor="avatar"
              className="comments__label comments__label--hidden"
            >
              Avatar
            </label>
            <div name="avatar" className="glbl__user-avatar">
              <img
                className="glbl__user-avatar"
                alt="User Img"
                src={userimg}
              ></img>
            </div>
          </div>
          <div className="comments__form-input">
            <label htmlFor="new_comment" className="comments__label">
              Join the conversation
            </label>
            <input
              type="text"
              placeholder="Add a new comment..."
              className="comments__textarea"
            />
            <label
              htmlFor="commentsubmit"
              className="comments__label comments__label--hidden"
            >
              Comment
            </label>
            <Button
              icon={addcom}
              buttonName={"Comment"}
              classModified="false"
              name="commentsubmit"
            />
          </div>
        </form>
        <div className="comments__list">
          
        </div>
      </div>

      {/* -------------------------------- TO BE WORKED ON */}

      <div className="nextvideos"></div>
    </div>
  );
}

export default App;
