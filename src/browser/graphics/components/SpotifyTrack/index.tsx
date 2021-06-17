import clone from 'clone';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SpotifyPlayingTrack } from '../../../../nodecg/external/nodecg-spotify-widget/spotifyPlayingTrack';
import { SpotifyWidgetInstance } from '../../../../nodecg/spotify';

const TrackText = styled.span`
  margin: 0 0.2em;
`;

export const SpotifyTrack = () => {

  const [track, setTrack] = useState<SpotifyPlayingTrack>(null);

  useEffect(() => {
    (nodecg as SpotifyWidgetInstance).Replicant('spotifyPlayingTrack', 'nodecg-spotify-widget').on('change', (newVal) => {
      setTrack(clone(newVal));
    })
  }, []);

  return (
    <React.Fragment>
      <i className="fas fa-music"></i>
      { track && (
        <TrackText>
          { track.name } / { track.artists.join(',') }
        </TrackText>
      )}
    </React.Fragment>
  );
}