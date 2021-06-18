import React from 'react';
import ReactDOM from 'react-dom';
import { SoloGameView } from './commons/SoloGameView';

const App = () => {
  return (
    <SoloGameView clips={{ x: 227, y: 40, width: 1125, height: 844 }} />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));