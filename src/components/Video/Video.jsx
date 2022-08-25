function Video({ vid }) {
  return (
    <div className={`videoslist__video vid-${vid.id}`}>
      <img src={vid.image} className="videoslist__thumbnail" alt={vid.title} />

      <div className="videoslist__details">
        <p className="videoslist__videotitle">{vid.title}</p>
        <p className="videoslist__videochannel">{vid.channel}</p>
      </div>
    </div>
  );
}

export default Video;
