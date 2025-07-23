import React, { useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/TrendingNow.css';

const TrendingNow = () => {
    const { trending, selectMovie } = useContext(AppContext);
    const containerRef = useRef(null);

    const handleScroll = (direction) => {
        if (containerRef.current) {
            const scrollAmount = direction === 'right' ? 300 : -300;
            containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="trending-now">
            <h2>Trending Now</h2>

            <div className="carousel-container">
                <button
                    className="scroll-button left"
                    onClick={() => handleScroll('left')}
                >
                    &lt;
                </button>

                <div className="carousel" ref={containerRef}>
                    {trending.slice(0, 60).map((item) => (
                        <div
                            key={item.Id}
                            className="trending-item"
                            onClick={() => selectMovie(item)}
                        >
                            <img
                                src={`/assets/${item.CoverImage}`}
                                alt={item.Title}
                            />
                        </div>
                    ))}
                </div>

                <button
                    className="scroll-button right"
                    onClick={() => handleScroll('right')}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default TrendingNow;
