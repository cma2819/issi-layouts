import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ClippedCanvas } from '../components/ClippedCanvas';
import bgImage from '../statics/setup.png';
import { GraphicsApp } from '../GraphicsApp';
import { SetupSchedules } from '../components/SetupSchedules';
import { SpotifyTrack } from '../components/SpotifyTrack';
import { TwitterNotification } from '../components/TwitterNotification';

const RunDeck = styled.div`
  position: absolute;
  top: 280px;
  left: 80px;
`;

const SpotifyTrackArea = styled.div`
  position: absolute;
  top: 970px;
  left: 80px;
  font-size: 40px;
`;

const TwitterArea = styled.div`
  position: absolute;
  top: 700px;
  left: 1560px;
  width: 360px;
  font-size: 32px;
`;

const App = () => {

  return (
    <React.Fragment>
      <ClippedCanvas
        width={1920}
        height={1080}
        clipPaths={[]}
        backgroundImage={bgImage}
      />
      <GraphicsApp>
        <RunDeck>
          <SetupSchedules/>
        </RunDeck>
        <SpotifyTrackArea>
          <SpotifyTrack />
        </SpotifyTrackArea>
        <TwitterArea>
          <TwitterNotification />
        </TwitterArea>
      </GraphicsApp>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));