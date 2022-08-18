// TEMP
import userimg from "./assets/images/Mohan-muruge.jpg";
import bflogo from "./assets/images/BrainFlix-logo.svg";
import upld from "./assets/images/Icons/upload.svg";
import likesimg from "./assets/images/Icons/likes.svg";
import viewsimg from "./assets/images/Icons/views.svg";

// DATA
// import videoList from "./data/videos.json";
import videoDetails from "./data/video-details.json";

// Not Temp
import Header from "./components/Header";
import CurrentVideo from "./components/CurrentVideo";
/**
 * reminder: to build string to access video
 * const API_KEY = "?api_key=bd6be8d0-bde7-4b66-848d-bccaa5394a3a";
 * const videoString = `${videoDetails[0].video}${API_KEY}`;
 * <Hero video={videoString} poster={videoDetails[0].image} />
 */

function App() {
  /**
   * Date formatter.
   */
  const dateOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
  /**
   * Function to return a formatted date from a timestamp string.
   * @param {string} timestamp;
   * @param {Object} dateOptions;
   */
  const formatDate = (timestamp, options) => {
    let date = new Date(timestamp);
    return date.toLocaleDateString("en-us", options);
  };

  return (
    <div className="bf__wrapper">
      <Header userimg={userimg} bflogo={bflogo} upld={upld} />
      <CurrentVideo videoDetails={videoDetails[0]} />
      
      {/* WORKING ON NOW */}

      <section className="details">
        <div className="details__top">
          <div className="details__title">
            {/* eslint-disable jsx-a11y/heading-has-content */}
            <h2 className="details__videotitle">{videoDetails[0].title}</h2>
          </div>
          <div className="details__stats">
            <div className="details__details">
              <p className="details__text details__text--name">
                {videoDetails[0].channel}
              </p>
              <p className="details__text">
                {formatDate(videoDetails[0].timestamp, dateOptions)}
              </p>
            </div>
            <div className="details__details">
              <p className="details__text">
                <img
                  className="details__text--icon"
                  src={viewsimg}
                  alt="views"
                />
                {videoDetails[0].views}
              </p>
              <p className="details__text">
                <img
                  className="details__text--icon"
                  src={likesimg}
                  alt="likes"
                />
                {videoDetails[0].likes}
              </p>
            </div>
          </div>
        </div>
        <div className="details__synopsis"></div>
        <div className="details__comments"></div>
      </section>

      {/* TO BE WORKED ON */}

      <div className="nextvideos"></div>
    </div>
  );
}

export default App;
