import { formatDate } from "../styles/utilities/utilityFunctions";
import { dateOptions } from "../styles/utilities/utilityFunctions";

import likesimg from "../assets/images/Icons/likes.svg";
import viewsimg from "../assets/images/Icons/views.svg";

function VideoDetails({ selectedVideo }) {
  return (
    <section className="details">
      <div className="details__top">
        <div className="details__title">
          {/* eslint-disable jsx-a11y/heading-has-content */}
          <h2 className="details__videotitle">{selectedVideo.title}</h2>
        </div>
        <div className="details__stats">
          <div className="details__details">
            <p className="details__text details__text--title">
              {selectedVideo.channel}
            </p>
            <p className="details__text">
              {formatDate(selectedVideo.timestamp, dateOptions)}
            </p>
          </div>
          <div className="details__details">
            <p className="details__text">
              <img className="details__text--icon" src={viewsimg} alt="views" />
              {selectedVideo.views}
            </p>
            <p className="details__text">
              <img className="details__text--icon" src={likesimg} alt="likes" />
              {selectedVideo.likes}
            </p>
          </div>
        </div>
      </div>
      <div className="details__synopsis">
        <p className="details__text details__text--body">
          {selectedVideo.description}
        </p>
        <p className="details__text details__text--title">
          {selectedVideo.comments.length} Comments
        </p>
      </div>
    </section>
  );
}

export default VideoDetails;
