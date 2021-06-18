import React from 'react';
import ReactDOM from 'react-dom';
import { ClippedCanvas } from '../components/ClippedCanvas';
import bgImage from '../statics/game.png';
import styled from 'styled-components';
import { TwitterNotification } from '../components/TwitterNotification';
import { GraphicsApp } from '../GraphicsApp';
import { RunDataLabel } from '../components/RunDataLabel';
import { Timer } from '../components/Timer';
import { RunParticipants } from '../components/RunParticipants';
import { FocusSocialProvider } from '../providers/FocusSocialProvider';
import { RacePlayer } from '../components/RacePlayer';
import { Socials } from '../components/RacePlayer/Socials';

const RunDataArea = styled.div`
  position: absolute;
  top: 912px;
  left: 40px;
`;

const TimerArea = styled.div`
  position: absolute;
  top: 912px;
  left: 1140px;
`;

const TwitterArea = styled.div`
  position: absolute;
  top: 120px;
  left: 1560px;
  width: 360px;
  font-size: 32px;
`;

type RunnerProps = {
  index: number;
}
const RunnerArea = styled.div`
  position: absolute;
  top: 240px;
  height: 60px;
  font-size: 45px;
  left: ${({index}: RunnerProps) => index === 0 ? '40px' : '810px'};
`
const RunnerSocialArea = styled.div`
  position: absolute;
  top: 710px;
  margin-top: 8px;
  width: 280px;
  font-size: 36px;
  left: ${({index}: RunnerProps) => index === 0 ? '490px' : '1260px'};
`;

const ParticipatesArea = styled.div`
  position: absolute;
  top: 720px;
  left: 1590px;
  width: 280px;
`;

export const App = () => {
  return (
    <React.Fragment>
      <ClippedCanvas
        width={1920}
        height={1080}
        clipPaths={[
          { x: 40, y: 300, width: 730, height: 410 },
          { x: 810, y: 300, width: 730, height: 410 },
        ]}
        backgroundImage={bgImage}
      />
      <GraphicsApp>
        <FocusSocialProvider>
          <RunDataArea>
            <RunDataLabel />
          </RunDataArea>
          <TimerArea>
            <Timer />
          </TimerArea>
          {
            [0, 1].map(index =>
              <React.Fragment key={index}>
                <RunnerArea index={index}>
                  <RacePlayer index={index} />
                </RunnerArea>
                <RunnerSocialArea index={index}>
                  <Socials index={index} />
                </RunnerSocialArea>
              </React.Fragment>
            )
          }
          <ParticipatesArea>
            <RunParticipants race />
          </ParticipatesArea>
          <TwitterArea>
            <TwitterNotification />
          </TwitterArea>
        </FocusSocialProvider>
      </GraphicsApp>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));