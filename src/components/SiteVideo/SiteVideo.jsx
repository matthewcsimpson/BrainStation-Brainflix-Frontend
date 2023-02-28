const REACT_APP_LOCAL_API = process.env.REACT_APP_LOCAL_API

function SiteVideo({ vid }) {
  return (
    <div className={`videoslist__video vid-${vid.id}`}>
      <img src={`${REACT_APP_LOCAL_API}/${vid.image}`} className="videoslist__thumbnail" alt={vid.title} />
      <div className="videoslist__details">
        <p className="videoslist__videotitle">{vid.title}</p>
        <p className="videoslist__videochannel">{vid.channel}</p>
      </div>
    </div>
  );
}

export default SiteVideo;
