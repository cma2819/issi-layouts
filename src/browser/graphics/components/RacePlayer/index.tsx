import React, { useContext } from 'react';
import styled from 'styled-components';
import { WidthFixedLabel } from '../../organisms/WidthFixedLabel';
import { ScAdditionContext } from '../../providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';

type Props = {
  index: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Icon = styled.i`
  margin-right: 8px;
`;

const NameText = styled.div`
  width: 280px;
  overflow-x: visible;
`;

const ResultText = styled.div`
  width: 150px;
`;

export const RacePlayer = ({index}: Props) => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);

  const currentRun = speedcontrol.runDataArray.find((_, index) => index === scAdditions.speedcontrolCurrentRunIndex);
  const player = currentRun?.teams.flatMap(team => team.players).find((_, _index) => _index === index);
  const team = currentRun?.teams.find(team => team.players.find(p => p.id === player?.id ));

  return (
    <Container>
      <Icon className="fas fa-gamepad"></Icon>
      {
        player && (
          <NameText>
            <WidthFixedLabel widthPx={280} align="left">
              { player.name }
            </WidthFixedLabel>
          </NameText>
        )
      }
      {
        team && speedcontrol?.timer?.teamFinishTimes &&
        speedcontrol.timer.teamFinishTimes[team.id] && (
          <ResultText>
            <WidthFixedLabel widthPx={150} align="center">
              {speedcontrol.timer.teamFinishTimes[team.id].time}
            </WidthFixedLabel>
          </ResultText>
        )
      }
    </Container>
  )
}