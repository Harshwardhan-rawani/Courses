// src/VideoPlayer.js
import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

const Videoplayer = () => {
    const param = useParams()
    const videoRef = useRef(null);
    
    const handlePlay = () => {
        videoRef.current.play();
    };
    
    const handlePause = () => {
        videoRef.current.pause();
    };
    
    const handleVolumeChange = (e) => {
        videoRef.current.volume = e.target.value;
    };
    
    return (
        <div>
            <video ref={videoRef} width="640" height="360" controls>
                <source src={`${import.meta.env.VITE_API_URL}/${param.name}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    onChange={handleVolumeChange}
                    defaultValue="1"
                />
            </div>
        </div>
    );
};

export default Videoplayer;
