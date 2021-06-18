import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { CommentatorContext } from './CommentatorProvider';
import { ScAdditionContext } from './ScAdditionProvider';
import { SpeedcontrolContext } from './SpeedcontrolProvider';

type FocusSocial = 'twitch' | 'nico' | 'twitter' | 'youtube';
const allSocialNames: Array<FocusSocial> = ['twitch', 'nico', 'twitter', 'youtube'];

const defaultValue = 'twitch';

const CHANGE_INTERVAL_SEC = 60;

export const FocusSocialContext = createContext<FocusSocial>(defaultValue);
type Props = {
  children: ReactNode;
};

export const FocusSocialProvider = ({ children }: Props) => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAddition = useContext(ScAdditionContext);
  const extIdToCommentators = useContext(CommentatorContext);

  const [ existSocial, setExistSocial ] = useState<Array<FocusSocial>>([]);
  const [ focus, setFocus ] = useState<FocusSocial>(defaultValue);

  useEffect(() => {
    const currentRun = speedcontrol.runDataArray.find(
      (_, index) => index === scAddition.speedcontrolCurrentRunIndex
    );

    if (!currentRun || !currentRun.externalID || !(currentRun.externalID in extIdToCommentators)) {
      return;
    }

    const runnerSocials = currentRun.teams.flatMap(team => team.players).map((player) => {
      const additions = scAddition.speedcontrolUserAdditionArray.find(
        addition => addition.id === player.externalID
      );

      return {
        twitch: player.social.twitch,
        nico: additions?.social.nico,
        twitter: additions?.social.twitter,
        youtube: additions?.social.youtube,
      };
    });
    const commentatorSocials = extIdToCommentators[currentRun.externalID]?.map(
      (commentator) => commentator.social
    );

    const allSocials = [
      ... runnerSocials,
      ... commentatorSocials,
    ];
    const socialConcat = {
      twitch: allSocials.map(social => social.twitch).filter(d => d),
      nico: allSocials.map(social => social.nico).filter(d => d),
      twitter: allSocials.map(social => social.twitter).filter(d => d),
      youtube: allSocials.map(social => social.youtube).filter(d => d),
    };

    setExistSocial(allSocialNames.filter(
      social => socialConcat[social].length > 0
    ));
  }, [
    speedcontrol.runDataArray,
    scAddition.speedcontrolUserAdditionArray,
    extIdToCommentators,
    scAddition.speedcontrolCurrentRunIndex
  ]);

  useEffect(() => {

    const intervalId = window.setInterval(() => {
      const length = existSocial.length;
      const next = (existSocial.indexOf(focus) + 1) % length;

      setFocus(existSocial[next]);
      
    }, CHANGE_INTERVAL_SEC * 1000);

    return () => clearInterval(intervalId);
  }, [
    existSocial,
    focus,
    // no "focus" 
  ]);

  return (
    <FocusSocialContext.Provider value={focus}>
      { children }
    </FocusSocialContext.Provider>
  )
}