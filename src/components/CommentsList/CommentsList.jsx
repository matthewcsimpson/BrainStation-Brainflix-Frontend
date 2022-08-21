// images
import addcom from "../../assets/images/Icons/add_comment.svg";
import userimg from "../../assets/images/Mohan-muruge.jpg";

// styles
import "./CommentsList.scss";

// imports
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Comment from "./Comment/Comment";

function CommentsList({ selectedVideo }) {
  return (
    <div className="comments">
      <form className="comments__form">
        <div className="dumbwrapper">
          <div className="comments__avatar-wrapper">
            <label
              htmlFor="avatar"
              className="comments__label comments__label--hidden"
            >
              Avatar
            </label>
            <Avatar userimg={userimg} />
          </div>
        </div>
        <div className="comments__form-input">
          <div className="dumbwrapper">
            <label htmlFor="new_comment" className="comments__label">
              Join the conversation
            </label>
            <input
              type="text"
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
            <Button
              icon={addcom}
              buttonName={"Comment"}
              classModified="false"
              name="commentsubmit"
            />
          </div>
        </div>
      </form>
      {selectedVideo.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default CommentsList;
