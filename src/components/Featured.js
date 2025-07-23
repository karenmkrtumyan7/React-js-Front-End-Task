import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import VideoPlayer from './VideoPlayer';
import '../styles/Featured.css';

const Featured = () => {
    const { featured, selectMovie, showVideo, videoUrl } = useContext(AppContext);

    if (!featured) return null;

    const formatDuration = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}h${minutes}m`;
    };

    return (
        <div className="featured">
            {showVideo ? (
                <VideoPlayer url={videoUrl} />
            ) : (
                <img
                    src={`/assets/${featured.CoverImage}`}
                    alt={featured.Title}
                    className="featured-background"
                />
            )}

            <div className="featured-content">
                <div className="category">{featured.Category}</div>

                <img
                    src={`/assets/${featured.TitleImage}`}
                    alt={featured.Title}
                    className="title-image"
                />

                <div className="meta">
                    <span>{featured.ReleaseYear}</span>
                    <span>{featured.MpaRating}</span>
                    <span>{formatDuration(featured.Duration)}</span>
                </div>

                <p className="description">{featured.Description}</p>

                <div className="actions">
                    <button className="play" onClick={() => selectMovie(featured)}>
                        Play
                    </button>
                    <button className="more-info">More Info</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
