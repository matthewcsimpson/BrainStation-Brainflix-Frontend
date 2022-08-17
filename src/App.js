// TEMP
import userimg from "./assets/images/Mohan-muruge.jpg";
import bflogo from "./assets/images/BrainFlix-logo.svg";
import upld from "./assets/images/Icons/upload.svg";

// DATA
// import videoList from "./data/videos.json";
import videoDetails from "./data/video-details.json";

// Not Temp
import Header from "./components/Header";
import Hero from "./components/Hero";

/**
 * reminder: to build string to access video
 * const API_KEY = "?api_key=bd6be8d0-bde7-4b66-848d-bccaa5394a3a";
 * const videoString = `${videoDetails[0].video}${API_KEY}`;
 * <Hero video={videoString} poster={videoDetails[0].image} />
 */

function App() {
  return (
    <div className="bf__wrapper">
      <Header userimg={userimg} bflogo={bflogo} upld={upld} />
      <Hero video={videoDetails[0].video} poster={videoDetails[0].image} />
      {/* WORKING ON NOW */}

      {/* TO BE WORKED ON */}
      <section className="details">
        <div className="details__title-likes">
          
        </div>
        <div className="details__synopsis"></div>
        <div className="details__comments"></div>
      </section>

      <div className="nextvideos"></div>
    </div>
  );
}

export default App;
