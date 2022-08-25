// Components
import Hero from "../components/Hero/Hero";
import CurrentVideo from "../components/CurrentVideo/CurrentVideo";
import CommentsList from "../components/CommentsList/CommentsList";
import VideoList from "../components/VideoList/VideoList";

// Libraries
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Data
import api from "../data/api_data.json";

function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoArray, setVideoArray] = useState(null);
  const { videoid } = useParams();

  /**
   * Function to load a list of videos from an external source.
   * No parameters
   */
  const loadRemoteVideoArray = () => {
    axios
      .get(`${api.apiBaseUrl}/videos${api.apiKeyString}`)
      .then((res) => {
        setVideoArray(res.data);
        loadSpecificVideoDetails(res.data[0].id);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  /**
   * Function to load the details of a specific video.
   * @param {string} id
   */
  const loadSpecificVideoDetails = (id) => {
    axios
      .get(`${api.apiBaseUrl}/videos/${id}${api.apiKeyString}`)
      .then((res) => {
        setSelectedVideo(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  /**
   * useEffect to call the loadRemoteVideoList() function;
   */
  useEffect(() => {
    loadRemoteVideoArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * useEffect to load specific video details.
   * Triggers when the active videoid changes
   */
  useEffect(() => {
    if (videoid) {
      loadSpecificVideoDetails(videoid);
    }
  }, [videoid]);

  return (
    <>
      {selectedVideo && (
        <>
          <Hero video={selectedVideo.video} poster={selectedVideo.image} />
          <div className="bf__flexwrapper">
            <div className="bf__subwrapper">
              <CurrentVideo videoDetails={selectedVideo} />
              <CommentsList selectedVideo={selectedVideo} />
            </div>
            <VideoList
              selectedVideoId={selectedVideo.id}
              videoArray={videoArray}
            />
          </div>
        </>
      )}
    </>
  );
}

export default VideoPage;
