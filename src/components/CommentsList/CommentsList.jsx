// images
import addcom from "../../assets/images/Icons/add_comment.svg";
import userImg from "../../assets/images/Mohan-muruge.jpg";

// styles
import "./CommentsList.scss";

// components
import CommentsForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

function CommentsList({
  selectedVideo,
  newLoadSpecificVideoDetails,
  newLoadRemoteVideoArray,
}) {
  return (
    <div className="comments">
      <CommentsForm
        selectedVideo={selectedVideo}
        newLoadSpecificVideoDetails={(id) => newLoadSpecificVideoDetails}
        newLoadRemoteVideoArray={() => newLoadRemoteVideoArray}
        userImg={userImg}
        addcom={addcom}
      />
      {selectedVideo.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default CommentsList;
