// styles
import "../CommentsList/CommentsList.scss";

// components
import SiteButton from "../SiteButton/SiteButton";
import Avatar from "../Avatar/Avatar";

// libraries
// import axios from "axios";

function CommentsForm({ selectedVideo, userImg, addcom }) {
  const clickHandler = () => {
    console.log("clicked!");
    console.log(selectedVideo.comments);
  };

  const postComment = (comment) => {};

  const commentSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.new_comment.value);
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
