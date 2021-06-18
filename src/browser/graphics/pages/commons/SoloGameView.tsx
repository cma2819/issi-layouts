import React from 'react';
import { ClippedCanvas } from '../../components/ClippedCanvas';
import bgImage from '../../statics/game.png';
import styled from 'styled-components';
import { TwitterNotification } from '../../components/TwitterNotification';
import { GraphicsApp } from '../../GraphicsApp';
import { RunDataLabel } from '../../components/RunDataLabel';
import { Timer } from '../../components/Timer';
import { RunParticipants } from '../../components/RunParticipants';
import { FocusSocialProvider } from '../../providers/FocusSocialProvider';
import { ClipPath } from '../../components/ClippedCanvas/types';

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

const RunnersArea = styled.div`
  position: absolute;
  top: 720px;
  left: 1590px;
  width: 280px;
`;

type Props = {
  clips: ClipPath;
}

export const SoloGameView = ({ clips }: Props) => {
  return (
    <React.Fragment>
      <ClippedCanvas
        width={1920}
        height={1080}
        clipPaths={[clips]}
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
          <RunnersArea>
            <RunParticipants />
          </RunnersArea>
          <TwitterArea>
            <TwitterNotification />
          </TwitterArea>
        </FocusSocialProvider>
      </GraphicsApp>
    </React.Fragment>
  );
}
