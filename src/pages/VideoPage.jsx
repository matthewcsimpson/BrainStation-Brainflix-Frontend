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
const REACT_APP_LOCAL_API = process.env.REACT_APP_LOCAL_API;

function VideoPage() {
  const { videoid } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoArray, setVideoArray] = useState(null);

  /**
   * Function to load a list of videos from the shiny new API that I have created.
   */
  const newLoadRemoteVideoArray = () => {
    axios
      .get(`${REACT_APP_LOCAL_API}/videos`)
      .then((res) => {
        setVideoArray(res.data);
        if (!videoid) {
          newLoadSpecificVideoDetails(res.data[0].id);
        }
      })
      .catch((e) => {
        console.error("Error getting videos", e);
      });
  };

  /**
   * Function to load the details of a specific video from the shiny new API I have made.
   * @param {string} id
   */
  const newLoadSpecificVideoDetails = (id) => {
    axios
      .get(`${REACT_APP_LOCAL_API}/videos/${id}`)
      .then((res) => {
        setSelectedVideo(res.data);
      })
      .catch((e) => {
        console.error("Error getting specific video", e);
      });
  };

  /**
   * post the new comment
   * @param {object} comment
   */
  const postComment = async (comment) => {
    await axios
      .post(
        `${REACT_APP_LOCAL_API}/videos/${selectedVideo.id}/comments`,
        comment
      )
      .catch((error) => console.error("Error posting comment", error));
  };

  /**
   * capture incoming comment form data and post.
   * @param {event} e
   */
  const commentSubmit = async (e) => {
    e.preventDefault();

    if (e.target.new_comment.value.length > 0) {
      const newComment = {
        videoid: selectedVideo.id,
        comment: e.target.new_comment.value,
        timestamp: Date.now(),
      };
      await postComment(newComment);
      e.target.new_comment.value = "";
      newLoadSpecificVideoDetails(selectedVideo.id);
    } else {
      alert("You must comment something!");
    }
  };

  /**
   * useEffect to call the loadRemoteVideoList() function;
   */
  useEffect(() => {
    newLoadRemoteVideoArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * useEffect to load specific video details.
   * Triggers when the active videoid changes
   */
  useEffect(() => {
    if (videoid) {
      newLoadSpecificVideoDetails(videoid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoid]);

  return (
    <>
      {selectedVideo && (
        <>
          <Hero video={selectedVideo.video} poster={selectedVideo.image} />
          <div className="bf__flexwrapper">
            <div className="bf__subwrapper">
              <CurrentVideo videoDetails={selectedVideo} />
              <CommentsList
                selectedVideo={selectedVideo}
                newLoadSpecificVideoDetails={() => newLoadSpecificVideoDetails}
                newLoadRemoteVideoArray={() => newLoadRemoteVideoArray}
                commentSubmit={(e) => commentSubmit(e)}
              />
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
