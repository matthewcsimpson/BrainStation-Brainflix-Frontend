// styles
import "../CommentsList/CommentsList.scss";

// components
import SiteButton from "../SiteButton/SiteButton";
import Avatar from "../Avatar/Avatar";

// data
import api from "../../data/api_data.json";

// libraries
import axios from "axios";

function CommentsForm({ selectedVideo, userImg, addcom }) {
  /**
   * function to handle button clicks.  Mostly here to prevent errors.
   * @param {event} e
   */
  const clickHandler = (e) => {
    console.log("clicked!");
  };

  const postComment = (comment) => {
    axios
      .post(`${api.newApiBaseUrl}/videos/${selectedVideo.id}/comments`, comment)
      .then((res) => {
        console.log(res);
      });
  };

  /**
   * capture incoming comment form data and post.
   * @param {event} e
   */
  const commentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      videoid: selectedVideo.id,
      comment: e.target.new_comment.value,
      timestamp: Date.now(),
    };
    postComment(newComment);
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
