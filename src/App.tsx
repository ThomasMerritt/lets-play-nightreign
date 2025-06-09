import React, { useState, useEffect } from 'react';
import './App.css';
import dance from '../src/assets/dance.gif';
import music from '../src/assets/motivationalMusic.mp3';

function App() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); 

    const audio = new Audio(music);
    audio.loop = true;

    const playAudio = async () => {
          try {
              await audio.play();
          } catch (error) {
              console.warn("Audio autoplay blocked:", error);
          }
      };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className={`main-content ${fadeIn ? 'fade-in' : ''}`}>
      <img src={dance} alt="Dancing gif" />
      <h1 className='title'>Get on Nightreign</h1>
    </div>
  );
}

export default App;