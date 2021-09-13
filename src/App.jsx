import React from 'react';

import DrumPad from './conponents/drumPad';

function App() {
  return (
    <div id="drum-machine">
      <div id="display" />
      <DrumPad keyboard="Q" />
      <DrumPad keyboard="W" />
      <DrumPad keyboard="E" />
      <DrumPad keyboard="A" />
      <DrumPad keyboard="S" />
      <DrumPad keyboard="D" />
      <DrumPad keyboard="Y" />
      <DrumPad keyboard="X" />
      <DrumPad keyboard="C" />
    </div>
  );
}

export default App;
