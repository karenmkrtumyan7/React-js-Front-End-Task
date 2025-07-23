import '../styles/VideoPlayer.css';

const VideoPlayer = ({ url }) => {
    return (
        <div className="video-player">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="background-video"
            >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
        </div>
    );
};

export default VideoPlayer;
