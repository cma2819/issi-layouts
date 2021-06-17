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

type SmallableProps = {
  small?: boolean;
}

const Container = styled.div`
  position: relative;
`;

const Column = styled.div`
  height: ${({small}: SmallableProps) => !small ? '133px' : '95px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Games = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const Names = styled.div`
  position: absolute;
  top: 0px;
  left: ${({small}: SmallableProps) => !small ? '1115px' : '840px'};
  height: ${({small}: SmallableProps) => !small ? '110px' : '95px'};
`;

const GameText = styled.div`
  font-size: ${({small}: SmallableProps) => !small ? '68px' : '45px'};
`;

const MiscText = styled.div`
  font-size: ${({small}: SmallableProps) => !small ? '45px' : '40px'};
`;

export const OnDeckRun = ({ game, category, runners, commentators, console, estimate, small }: Props) => {

  return (
    <Container>
      <Games>
        <Column small={small}>
          <GameText small={small}>
            <WidthFixedLabel widthPx={1100}>
              {game}
            </WidthFixedLabel>
          </GameText>
          <WidthFixedLabel widthPx={1100}>
            <MiscText small={small}>{category} / {console} / {estimate}</MiscText>
          </WidthFixedLabel>
        </Column>
      </Games>
      <Names small={small}>
        <Column small={small}>
          <MiscText small={small}>
            <WidthFixedLabel widthPx={295}>
              <SimpleNameplate name={runners.join(',')} role="runner" />
            </WidthFixedLabel>
          </MiscText>
          <MiscText small={small}>
            <WidthFixedLabel widthPx={295}>
              {
                commentators.length > 0 && (
                  <SimpleNameplate name={commentators.join(',')} role="commentator" />
                )
              }
            </WidthFixedLabel>
          </MiscText>
        </Column>
      </Names>
    </Container>
  );
}