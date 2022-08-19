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
  const [selectedVideo] = useState(videoDetails[0]);
  // setSelectedVideo

  return (
    <div className="bf__wrapper">
      <Header userimg={userimg} bflogo={bflogo} upld={upld} />
      <CurrentVideo videoDetails={selectedVideo} />

      {/* -------------------------------- WORKING ON NOW */}

      <div className="comments">
        <form className="comments__form">
          <div>
            <label
              for="avatar"
              className="comments__label comments__label--hidden"
            >
              Avatar
            </label>
            <div name="avatar" className="glbl__user-avatar"></div>
          </div>
          <div className="comments__form-input">
            <label for="new_comment" class="comments__label">
              Join the conversation
            </label>
            <input
              type="text"
              placeholder="Add a new comment..."
              class="comments__textarea"
            />
            <label
              for="commentsubmit"
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
      </div>

      {/* -------------------------------- TO BE WORKED ON */}

      <div className="nextvideos"></div>
    </div>
  );
}

export default App;
