import React from 'react';
import styled from 'styled-components';
import { SimpleNameplate } from '../Nameplate/SimpleNamePlate';
import { WidthFixedLabel } from '../WidthFixedLabel';

type Props = {
  game: string;
  category: string;
  runners: Array<string>;
  commentators: Array<string>;
  console: string;
  estimate: string;
  small?: boolean;
};

const Container = styled.div`
  position: relative;
`;

const MidColumn = styled.div`
  height: 133px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SmallColumn = styled.div`
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Games = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const Names = styled.div`
  position: absolute;
  top: 23px;
  height: 132px;
`;

const MidGameText = styled.div`
  font-size: 68px;
`;

const MidMiscText = styled.div`
  font-size: 45px;
`;

const SmallGameText = styled.div`
  font-size: 45px;
`;

const SmallMiscText = styled.div`
  font-size: 40px;
`;


export const OnDeckRun = ({ game, category, runners, commentators, console, estimate, small }: Props) => {

  const Column = !small ? MidColumn : SmallColumn;
  const GameText = !small ? MidGameText : SmallGameText;
  const MiscText = !small ? MidMiscText : SmallMiscText;

  return (
    <Container>
      <Games>
        <Column>
          <GameText>
            <WidthFixedLabel widthPx={1100}>
              {game}
            </WidthFixedLabel>
          </GameText>
          <WidthFixedLabel widthPx={1100}>
            <MiscText>{category} / {console} / {estimate}</MiscText>
          </WidthFixedLabel>
        </Column>
      </Games>
      <Names style={{
        top: !small ? '23px' : '0px',
        left: !small ? '1115px' : '840px',
      }}>
        <SmallColumn>
          <MiscText>
            <WidthFixedLabel widthPx={295}>
              <SimpleNameplate name={runners.join(',')} role="runner" />
            </WidthFixedLabel>
          </MiscText>
          <MiscText>
            <WidthFixedLabel widthPx={295}>
              {
                commentators.length > 0 && (
                  <SimpleNameplate name={commentators.join(',')} role="commentator" />
                )
              }
            </WidthFixedLabel>
          </MiscText>
        </SmallColumn>
      </Names>
    </Container>
  );
}