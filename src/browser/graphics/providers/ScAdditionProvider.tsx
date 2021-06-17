import clone from 'clone';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { CommentatorArray, ReplicantMap, ReplicantName, SpeedcontrolAdditionsInstance, SpeedcontrolCurrentRunIndex, SpeedcontrolPlayerArray, SpeedcontrolUserAdditionArray } from '../../../nodecg/speedcontrol-additions';

const defaultValues: ReplicantMap = {
  commentatorArray: [],
  speedcontrolCurrentRunIndex: 0,
  speedcontrolPlayerArray: [],
  speedcontrolUserAdditionArray: [],
};

export const ScAdditionContext = createContext<ReplicantMap>(defaultValues);

type Props = {
  children: ReactNode;
}

export const ScAdditionProvider = ({ children }: Props) => {

  const [ commentatorArray, setCommentatorArray ] = useState<CommentatorArray>(defaultValues.commentatorArray);
  const [ speedcontrolCurrentRunIndex, setSpeedcontrolCurrentRunIndex ] = useState<SpeedcontrolCurrentRunIndex>(defaultValues.speedcontrolCurrentRunIndex);
  const [ speedcontrolPlayerArray, setSpeedcontrolPlayerArray ] = useState<SpeedcontrolPlayerArray>(defaultValues.speedcontrolPlayerArray);
  const [ speedcontrolUserAdditionArray, setSpeedcontrolUserAdditionArray ] = useState<SpeedcontrolUserAdditionArray>(defaultValues.speedcontrolUserAdditionArray);

  useEffect(() => {  
    const mutations: Array<[ ReplicantName, React.Dispatch<any> ]> = [
      [ 'commentatorArray', setCommentatorArray ],
      [ 'speedcontrolCurrentRunIndex', setSpeedcontrolCurrentRunIndex ],
      [ 'speedcontrolPlayerArray', setSpeedcontrolPlayerArray ],
      [ 'speedcontrolUserAdditionArray', setSpeedcontrolUserAdditionArray ],
    ];

    mutations.forEach(([name, mutator]) => {
      const replicant = (nodecg as SpeedcontrolAdditionsInstance).Replicant(name, 'speedcontrol-additions');

      replicant.on('change', (newVal) => {
        mutator(clone(newVal));
      });
    });
  }, []);

  return (
    <ScAdditionContext.Provider value={{
      commentatorArray,
      speedcontrolCurrentRunIndex,
      speedcontrolPlayerArray,
      speedcontrolUserAdditionArray,
    }}>
      { children }
    </ScAdditionContext.Provider>
  )
}