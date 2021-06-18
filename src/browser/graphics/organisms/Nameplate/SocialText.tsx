import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FocusSocialContext } from '../../providers/FocusSocialProvider';

type ContainerProps = {
  entering: boolean;
  leaving: boolean;
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  transition: all 1s;
  opacity: ${({leaving, entering}: ContainerProps) =>
    leaving ? (entering ? '1' : '0') : '1'};
  transform: translateX(${({leaving, entering}: ContainerProps) =>
    leaving ? (entering ? '0' : '-10%') : '0'});
`;

const Icon = styled.i``;

const Social = styled.div``;

type Props = {
  twitch?: string;
  nico?: string;
  twitter?: string;
  youtube?: string;
};

export const SocialText = ({ twitch, nico, twitter, youtube }: Props) => {

  const focusSocial = useContext(FocusSocialContext);
  const [ focus, setFocus ] = useState<typeof focusSocial>('twitch');
  const [ entering, setEntering ] = useState<boolean>(false);
  const [ leaving, setLeaving ] = useState<boolean>(false);

  useEffect(() => {
    setEntering(false);
    setLeaving(true);
    setTimeout(() => {
      setFocus(focusSocial);
      setTimeout(() => {
        setLeaving(false);
      }, 1000);
    }, 1000)
  }, [ focusSocial ]);

  return (
    <React.Fragment>
      {
        focus === 'twitch' && twitch && (
          <Container entering={entering} leaving={leaving}>
            <Icon className="fab fa-twitch"></Icon>
            <Social>{ twitch }</Social>
          </Container>
        )
      }
      {
        focus === 'nico' && nico && (
          <Container entering={entering} leaving={leaving}>
            <Social>{ nico }</Social>
          </Container>
        )
      }
      {
        focus === 'twitter' && twitter && (
          <Container entering={entering} leaving={leaving}>
            <Icon className="fab fa-twitter"></Icon>
            <Social>{ twitter }</Social>
          </Container>
        )
      }
      {
        focus === 'youtube' && youtube && (
          <Container entering={entering} leaving={leaving}>
            <Icon className="fab fa-youtube"></Icon>
            <Social>{ youtube }</Social>
          </Container>
        )
      }
    </React.Fragment>
  )
}