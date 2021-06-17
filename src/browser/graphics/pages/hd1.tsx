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
        { x: 40, y: 40, width: 1500, height: 844 }
      ]}
      backgroundImage={bgImage}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));