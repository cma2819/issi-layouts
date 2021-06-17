import clone from 'clone';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { ActiveTweet } from '../../../../nodecg/external/nodecg-twitter-widget/activeTweet';
import { TwitterWidgetInstance } from '../../../../nodecg/twitter';
import Snake from '../../statics/twitter_snake.png'

type ContainerProps = {
  active?: boolean;
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 2s;
  transform: translateX(100%);
  ${({active}: ContainerProps) => active && css`transform: translateX(0)`};
`;

const Tweet = styled.div`
  position: absolute;
  top: 0px;
  min-width: calc(100% - 30px);
  padding: 15px 15px 45px 15px;
  background-color: #d2e4f0;
  border-radius: 0.5em 0 0 0.5em;
`;

const Name = styled.div`
  white-space: nowrap;
`;

const SnakeImage = styled.img`
  position: absolute;
  left: 200px;
  top: -34px;
`;

export const TwitterNotification = () => {

  const [ isActive, setIsActive ] = useState<boolean>(false);
  const [ activeTweet, setActiveTweet ] = useState<ActiveTweet>(null);

  useEffect(() => {
    (nodecg as TwitterWidgetInstance).Replicant('activeTweet', 'nodecg-twitter-widget').on('change', (newVal) => {
      if (newVal !== null) {
        setActiveTweet(clone(newVal));
        setIsActive(true);
      } else {
        setIsActive(false);
        setTimeout(() => {
          setActiveTweet(null);
        }, 2000);
      }
    });
  }, []);

  return (
    <Container active={isActive}>
      { activeTweet && (
        <React.Fragment>
          <SnakeImage src={Snake} />
          <Tweet>
            <Name>
              @{activeTweet.screenName}
            </Name>
            {activeTweet.text}
          </Tweet>
        </React.Fragment>
      )}
    </Container>
  );
}