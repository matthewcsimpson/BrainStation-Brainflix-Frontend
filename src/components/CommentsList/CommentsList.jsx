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
  commentSubmit
}) {



  return (
    <div className="comments">
      <CommentsForm
        selectedVideo={selectedVideo}
        newLoadSpecificVideoDetails={(id) => newLoadSpecificVideoDetails(id)}
        newLoadRemoteVideoArray={() => newLoadRemoteVideoArray}
        userImg={userImg}
        addcom={addcom}
        commentSubmit={(e)=>commentSubmit(e)}
      />
      {selectedVideo.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default CommentsList;
