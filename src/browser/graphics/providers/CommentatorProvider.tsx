import React from 'react';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Commentator } from '../../../nodecg/external/speedcontrol-additions/commentator';
import { ScAdditionContext } from './ScAdditionProvider';
import { SpeedcontrolContext } from './SpeedcontrolProvider';

type externalIdToCommentators = {
  [k: string]: Array<Commentator>;
};

const defaultValue: externalIdToCommentators = {};

export const CommentatorContext = createContext<externalIdToCommentators>(defaultValue);

type Props = {
  children: ReactNode
};

export const CommentatorProvider = ({ children }: Props) => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);

  const [ activeCommentators, setActiveCommentators ] = useState<externalIdToCommentators>(defaultValue);

  useEffect(() => {
    setActiveCommentators(
      Object.fromEntries(
        speedcontrol.runDataArray.map((run) => {
          const commentators = run.externalID ? scAdditions.commentatorArray.filter((commentator) => {
            return run.externalID && commentator.assignedRunIdArray.includes(run.externalID);
          }) : [];
          return [ run.externalID, commentators ]
        })
      )
    );
  }, [ speedcontrol, scAdditions ]);

  return <CommentatorContext.Provider value={activeCommentators}>
    { children }
  </CommentatorContext.Provider>
}