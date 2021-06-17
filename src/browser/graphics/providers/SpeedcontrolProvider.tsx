import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { RunDataArray, SpeedcontrolInstance, SpeedcontrolReplicantName, Timer } from '../../../nodecg/speedcontrol';
import clone from 'clone';

export const SpeedcontrolContext = createContext<{
  runDataArray: RunDataArray;
  timer: Timer;
}>({
  runDataArray: [],
  timer: {},
});

type Props = {
  children: ReactNode;
};

export const SpeedcontrolProvider = ({ children }: Props) => {

  const [ runDataArray, setRunDataArray ] = useState<RunDataArray>([]);
  const [ timer, setTimer ] = useState<Timer>({});
  
  
  useEffect(() => {
    
    const mutations: Array<[SpeedcontrolReplicantName, React.Dispatch<any>]> = [
      ['runDataArray', setRunDataArray],
      ['timer', setTimer],
    ];

    mutations.forEach(([name, mutator]) => {
      const replicant = (nodecg as SpeedcontrolInstance).Replicant(name, 'nodecg-speedcontrol');
    
      replicant.on('change', (newVal) => {
        mutator(clone(newVal));
      });
    });
  }, []);
  
  return (
    <SpeedcontrolContext.Provider value={{
      runDataArray,
      timer,
    }}>
      { children }
    </SpeedcontrolContext.Provider>
  )
}