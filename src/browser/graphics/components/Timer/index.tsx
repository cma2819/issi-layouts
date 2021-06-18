import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { WidthFixedLabel } from '../../organisms/WidthFixedLabel';
import { ScAdditionContext } from '../../providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 135px;
`;

const MainTime = styled.div`
  font-size: 68px;
`

const EstimateTime = styled.div`
  font-size: 45px;
`;

export const Timer = () => {

  const [ timerColor, setTimerColor ] = useState<string>('#888888');
  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);

  useEffect(() => {
    const colors = {
      'stopped': '#888888',
      'running': '',
      'paused': '#888888',
      'finished': '#3737FF',
    }

    setTimerColor(colors[speedcontrol.timer.state || 'paused']);
  }, [ speedcontrol ])

  const currentRun = speedcontrol.runDataArray.find((_, index) => index === scAdditions.speedcontrolCurrentRunIndex);

  return (
    <Container>
      {
        currentRun && (
          <React.Fragment>
            <MainTime>
              <WidthFixedLabel align="center" widthPx={400}>
                <div style={{ color: timerColor}}>
                  {speedcontrol.timer.time || ''}
                </div>
              </WidthFixedLabel>
            </MainTime>
            <EstimateTime>
              <WidthFixedLabel align="center" widthPx={1060}>
                {currentRun.estimate || ''}
              </WidthFixedLabel>
            </EstimateTime>
          </React.Fragment>
        )
      }
    </Container>
  );
}