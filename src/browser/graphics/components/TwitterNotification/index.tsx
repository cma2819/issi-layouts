import clone from 'clone';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ActiveTweet } from '../../../../nodecg/external/nodecg-twitter-widget/activeTweet';
import { TwitterWidgetInstance } from '../../../../nodecg/twitter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Tweet = styled.div`
  padding: 15px 15px 45px 15px;
  background-color: #d2e4f0;
  border-radius: 0.5em 0 0 0.5em;
`;

const Name = styled.div`
  white-space: nowrap;
`;

export const TwitterNotification = () => {

  const [ activeTweet, setActiveTweet ] = useState<ActiveTweet>(null);

  useEffect(() => {
    (nodecg as TwitterWidgetInstance).Replicant('activeTweet', 'nodecg-twitter-widget').on('change', (newVal) => {
      setActiveTweet(clone(newVal));
    });
  }, []);

  return (
    <Container>
      { activeTweet && (
        <Tweet>
          <Name>
            @{activeTweet.screenName}
          </Name>
          {activeTweet.text}
        </Tweet>
      )}
    </Container>
  );
}