import { createContext, useState, useEffect } from 'react';
import data from '../data/data.json'; // Adjust path as needed

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [featured, setFeatured] = useState(null);
    const [trending, setTrending] = useState([]);
    const [showVideo, setShowVideo] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        // Set initial data from imported JSON
        setFeatured(data.Featured);

        // Process trending data
        let trendingData = [...data.TendingNow];
        trendingData.sort((a, b) => new Date(b.Date) - new Date(a.Date));

        // Apply session storage sorting if exists
        const lastClickedId = sessionStorage.getItem('lastClickedMovieId');
        if (lastClickedId) {
            const clickedIndex = trendingData.findIndex(item => item.Id === lastClickedId);
            if (clickedIndex !== -1) {
                const [clickedItem] = trendingData.splice(clickedIndex, 1);
                trendingData = [clickedItem, ...trendingData];
            }
        }

        setTrending(trendingData);
    }, []);

    const selectMovie = (movie) => {
        setFeatured(movie);
        sessionStorage.setItem('lastClickedMovieId', movie.Id);

        // Reset video state before showing new one
        setShowVideo(false);
        setTimeout(() => {
            setVideoUrl(movie.VideoUrl);
            setShowVideo(true);
        }, 2000);
    };

    return (
        <AppContext.Provider value={{
            featured,
            trending,
            selectMovie,
            showVideo,
            videoUrl,
        }}>
            {children}
        </AppContext.Provider>
    );
};
