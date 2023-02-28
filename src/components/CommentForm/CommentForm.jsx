// styles
import "../CommentsList/CommentsList.scss";

// components
import SiteButton from "../SiteButton/SiteButton";
import Avatar from "../Avatar/Avatar";

// libraries
import axios from "axios";

// data
const REACT_APP_LOCAL_API = process.env.REACT_APP_LOCAL_API;

function CommentsForm({
  selectedVideo,
  newLoadSpecificVideoDetails,
  newLoadRemoteVideoArray,
  userImg,
  addcom,
}) {
  /**
   * Function to handle button clicks.
   * @param {event} e
   */
  const clickHandler = (e) => {
    console.info("button clicked");
    newLoadRemoteVideoArray();
  };

  const postComment = async (comment) => {
    await axios
      .post(
        `${REACT_APP_LOCAL_API}/videos/${selectedVideo.id}/comments`,
        comment
      )
      .then((res) => {
        console.info("res.data", res.data);
      })
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
      newLoadRemoteVideoArray();
      newLoadSpecificVideoDetails(selectedVideo.id);
    } else {
      alert("You must comment something!");
    }
  };

  return (
    <form className="comments__form" onSubmit={commentSubmit}>
      <div className="dumbwrapper">
        <div className="comments__avatar-wrapper">
          <label
            htmlFor="avatar"
            className="comments__label comments__label--hidden"
          >
            Avatar
          </label>
          <Avatar userImg={userImg} />
        </div>
      </div>
      <div className="comments__form-input">
        <div className="dumbwrapper">
          <label htmlFor="new_comment" className="comments__label">
            Join the conversation
          </label>
          <input
            type="textarea"
            placeholder="Add a new comment..."
            className="comments__textarea new_comment"
            id="new_comment"
          />
        </div>
        <div className="dumbwrapper">
          <label
            htmlFor="commentsubmit"
            className="comments__label comments__label--hidden"
          >
            Comment
          </label>
          <SiteButton
            icon={addcom}
            buttonName={"Comment"}
            classModified="false"
            name="commentsubmit"
            clickHandler={clickHandler}
          />
        </div>
      </div>
    </form>
  );
}

export default CommentsForm;
