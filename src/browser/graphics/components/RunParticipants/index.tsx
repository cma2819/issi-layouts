import React, { useContext } from 'react';
import styled from 'styled-components';
import { RunData } from '../../../../nodecg/external/speedcontrol/RunData';
import { Nameplate } from '../../organisms/Nameplate';
import { CommentatorContext } from '../../providers/CommentatorProvider';
import { ScAdditionContext } from '../../providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: visible;
`;

type Props = {
  race?: boolean
};

type Social = {
  twitch?: string;
  nico?: string;
  twitter?: string;
  youtube?: string;
}

export const RunParticipants = ({ race = false }: Props) => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);
  const commentators = useContext(CommentatorContext);

  const currentRun = speedcontrol.runDataArray.find((_, index) => index === scAdditions.speedcontrolCurrentRunIndex);
  const currentCommentators = currentRun && currentRun.externalID
    ? commentators[currentRun.externalID] || []
    : [];

  const playersFromRun = (run: RunData) => {
    return run.teams.flatMap(team => team.players);
  }

  const socialsFromRun = (run: RunData) => {
    return playersFromRun(run).map((player) => {
      const social = scAdditions.speedcontrolUserAdditionArray.find(addition => addition.id === player.externalID);
      return {
        twitch: player.social.twitch,
        twitter: social?.social.twitter,
        nico: social?.social.nico,
        youtube: social?.social.youtube,
      };
    });
  }

  const makeSocialsString = (socials: Array<Social>) => {
    return {
      twitch: socials.map(social => social.twitch || '-').join('/'),
      nico: socials.map(social => social.nico || '-').join('/'),
      twitter: socials.map(social => social.twitter || '-').join('/'),
      youtube: socials.map(social => social.youtube || '-').join('/'),
    }
  }

  return (
    <Container>
      {
        !race && currentRun && (
          <Nameplate
            name={playersFromRun(currentRun).map(player => player.name).join(',')}
            socials={makeSocialsString(socialsFromRun(currentRun))}
            role="runner"
          />
        )
      }
      {
        currentCommentators.length > 0 && (
          <Nameplate
            name={currentCommentators.map(commentator => commentator.name).join('/')}
            socials={makeSocialsString(currentCommentators.map(commentator => commentator.social))}
            role="commentator"
          />
        )
      }
    </Container>
  );
}