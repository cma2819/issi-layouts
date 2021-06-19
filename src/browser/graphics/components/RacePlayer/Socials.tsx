import React, { useContext } from 'react';
import { SocialText } from '../../organisms/Nameplate/SocialText';
import { WidthFixedLabel } from '../../organisms/WidthFixedLabel';
import { ScAdditionContext } from '../../providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';

type Props = {
  index: number;
};

export const Socials = ({index}: Props) => {
  
  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);

  const currentRun = speedcontrol.runDataArray.find((_, index) => index === scAdditions.speedcontrolCurrentRunIndex);
  const player = currentRun?.teams.flatMap(team => team.players).find((_, _index) => _index === index);
  const addition = scAdditions.speedcontrolUserAdditionArray.find(addition => addition.id === player?.customData.oengusId);

  const socials = Object.assign(
    {},
    addition?.social,
    {twitch: player?.social.twitch}
  );

  return (
    <WidthFixedLabel widthPx={280} align="left">
      <SocialText {... socials} />
    </WidthFixedLabel>
  );
}