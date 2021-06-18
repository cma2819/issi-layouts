import React from 'react';
import styled from 'styled-components';
import { WidthFixedLabel } from '../WidthFixedLabel';
import { SocialText } from './SocialText';

type Props = {
  name: string;
  socials: {
    twitch?: string;
		nico?: string;
		youtube?: string;
		twitter?: string;
	};
  role: 'runner'|'commentator';
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Icon = styled.i`
  font-size: 60px;
`;

const NameText = styled.div`
  font-size: 45px;
`;

const SocialArea = styled.div`
  font-size: 36px;
  text-align: right;
  align-self: flex-end;
`;

export const Nameplate = ({ name, socials, role }: Props) => {
  return (
    <Container>
      { role === 'runner' && (
        <Icon className="fas fa-gamepad"></Icon>
      )}
      { role === 'commentator' && (
        <Icon className="fas fa-headset"></Icon>
      )}
      <NameText>
        <WidthFixedLabel widthPx={280} align="left">
          { name }
        </WidthFixedLabel>
      </NameText>
      <SocialArea>
        <WidthFixedLabel widthPx={280} align="left">
          <SocialText {... socials} />
        </WidthFixedLabel>
      </SocialArea>
    </Container>
  );
}