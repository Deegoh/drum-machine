import React, { useState } from 'react';
import DrumPad from './drumPad';

const Board = () => {
  const [display, setDisplay] = useState('hello');

  const handleClick = () => {
    setDisplay('test');
  };

  return (
    <>
      <div id="display">{display}</div>
      <>
        <DrumPad
          keyboard="Q"
          id="Heater-1"
          url="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          onClick={handleClick}
        />
        <DrumPad
          id="Heater-2"
          keyboard="W"
          url="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        />
        <DrumPad
          id="Heater-3"
          keyboard="E"
          url="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        />
        <DrumPad
          id="Heater-4"
          keyboard="A"
          url="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        />
        <DrumPad
          id="Clap"
          keyboard="S"
          url="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        />
        <DrumPad
          id="Open-HH"
          keyboard="D"
          url="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        />
        <DrumPad
          id="Kick-n'-Hat"
          keyboard="Y"
          url="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        />
        <DrumPad
          id="Kick"
          keyboard="X"
          url="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        />
        <DrumPad
          id="Closed-HH"
          keyboard="C"
          url="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        />
      </>
    </>
  );
};

export default Board;
