// imgs
import userimg from "./assets/images/Mohan-muruge.jpg";
import bflogo from "./assets/images/BrainFlix-logo.svg";
import uploadIcon from "./assets/images/Icons/upload.svg";

// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import VideoPage from "./pages/VideoPage";
import UploadPage from "./pages/UploadPage";

function App() {
  /**
   * @deprecated
   * Function to handle setting the selected video.
   * Takes an incoming video ID and uses it to search for a specific video.
   * @param {string} selectedID
   */
  // eslint-disable-next-line no-unused-vars
  const handleVideoSelection = (selectedID) => {
    // eslint-disable-next-line no-undef
    setSelectedVideo(videoDetails.find((video) => video.id === selectedID));
  };

  return (
    <BrowserRouter>
      <div className="bf__wrapper">
        <Header userimg={userimg} bflogo={bflogo} buttonIcon={uploadIcon} />
        <Routes>
          <Route path="/" element={<VideoPage />} />
          <Route path="/video/:videoid" element={<VideoPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<VideoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
