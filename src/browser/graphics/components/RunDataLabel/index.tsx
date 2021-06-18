import React, { useContext } from 'react';
import styled from 'styled-components';
import { WidthFixedLabel } from '../../organisms/WidthFixedLabel';
import { ScAdditionContext } from '../../providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 1060px;
  height: 135px;
`;

const GameText = styled.div`
  font-size: 68px;
`

const CategoryText = styled.div`
  font-size: 45px;
`;

export const RunDataLabel = () => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);

  const currentRun = speedcontrol.runDataArray.find((_, index) => index === scAdditions.speedcontrolCurrentRunIndex);

  return (
    <Container>
      {
        currentRun && (
          <React.Fragment>
            <GameText>
              <WidthFixedLabel align="center" widthPx={1060}>
                {currentRun.game || ''}
              </WidthFixedLabel>
            </GameText>
            <CategoryText>
              <WidthFixedLabel align="center" widthPx={1060}>
                {currentRun.category || ''}
              </WidthFixedLabel>
            </CategoryText>
          </React.Fragment>
        )
      }
    </Container>
  );
}