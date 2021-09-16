/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';

const DrumPad = ({
  keyboard, url, id, updateDisplay,
}) => {
  const playSFX = () => {
    updateDisplay(id);
    const audio = document.getElementById(keyboard);
    audio.currentTime = 0;
    audio.play();
  };

  const handleKey = (event) => {
    if (event.code === `Key${keyboard}`) {
      playSFX(keyboard);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keypress', handleKey);

    return () => {
      window.removeEventListener('keypress', handleKey);
    };
  });

  return (
    <div
      tabIndex="-1"
      id={id}
      className="drum-pad"
      onClick={() => {
        playSFX(keyboard);
      }}
    >
      <audio
        className="clip"
        id={keyboard}
        src={url}
      />
      {keyboard}
    </div>
  );
};

export default DrumPad;
