import '../common.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ClippedCanvas } from '../components/ClippedCanvas';
import bgImage from '../statics/game.png';

const App = () => {
  return (
    <ClippedCanvas
      width={1920}
      height={1080}
      clipPaths={[
        { x: 227, y: 40, width: 1125, height: 844 }
      ]}
      backgroundImage={bgImage}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));