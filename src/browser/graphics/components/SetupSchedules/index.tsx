import React, { useContext } from 'react';
import styled from 'styled-components';
import { CommentatorContext } from '../../providers/CommentatorProvider';
import { ScAdditionContext } from '../../providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';
import { OnDeckRun } from '../../organisms/OnDeckRun';

const NextRun = styled.div`
height: 133px;
margin-bottom: 107px;
`;

const Deck = styled.div`
height: 95px;
margin-bottom: 100px;
`;

export const SetupSchedules = () => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);
  const commentators = useContext(CommentatorContext);

  const nextRun = speedcontrol.runDataArray.find((_, index) => {
    return index === scAdditions.speedcontrolCurrentRunIndex;
  });

  const onDeckRuns = speedcontrol.runDataArray.slice(
    scAdditions.speedcontrolCurrentRunIndex + 1,
    scAdditions.speedcontrolCurrentRunIndex + 3
  );

  return (
    <React.Fragment>
      <NextRun>
        {
          nextRun && (
            <OnDeckRun
              game={nextRun.game || ''}
              category={nextRun.category || ''}
              console={nextRun.system || ''}
              estimate={nextRun.estimate || ''}
              runners={nextRun.teams.flatMap(team => team.players.map(player => player.name)) || []}
              commentators={
                nextRun.externalID && commentators[nextRun.externalID]
                  ? commentators[nextRun.externalID].map(commentator => commentator.name)
                  : []
              }
            ></OnDeckRun>
          )
        }
      </NextRun>
      { onDeckRuns.map((run) => (
        <Deck key={run.id}>
          <OnDeckRun
            small
            game={run.game || ''}
            category={run.category || ''}
            console={run.system || ''}
            estimate={run.estimate || ''}
            runners={run.teams.flatMap(team => team.players.map(player => player.name)) || []}
            commentators={
              run.externalID && commentators[run.externalID]
                ? commentators[run.externalID].map(commentator => commentator.name)
                : []
            }
          ></OnDeckRun>
        </Deck>
      ))}
    </React.Fragment>
  )
}