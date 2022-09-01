// imgs
import userImg from "./assets/images/Mohan-muruge.jpg";
import bflogo from "./assets/images/BrainFlix-logo.svg";
import uploadIcon from "./assets/images/Icons/upload.svg";

// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import PageHeader from "./components/PageHeader/PageHeader";
import VideoPage from "./pages/VideoPage";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <BrowserRouter>
      <div className="bf__wrapper">
        <PageHeader userImg={userImg} bflogo={bflogo} buttonIcon={uploadIcon} />
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
