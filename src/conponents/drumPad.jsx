/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';

const playAudio = ({ id }) => {
  const sound = document.getElementById({ id });
  sound.play();
};

const DrumPad = ({ keyboard }) => (
  <div
    className="drum-pad"
    onClick={playAudio('Q')}
  >
    {keyboard}
    <audio
      id={keyboard}
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
    />
  </div>
);

export default DrumPad;
