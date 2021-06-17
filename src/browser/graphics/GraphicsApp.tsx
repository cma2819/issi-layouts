import './common.css';
import '@fortawesome/fontawesome-free/js/all.js';

import React, { ReactNode } from 'react';
import { SpeedcontrolProvider } from './providers/SpeedcontrolProvider';
import { ScAdditionProvider } from './providers/ScAdditionProvider';
import { CommentatorProvider } from './providers/CommentatorProvider';

type Props = {
  children: ReactNode
};

export const GraphicsApp = ({ children }: Props) => {

  return (
    <SpeedcontrolProvider>
      <ScAdditionProvider>
        <CommentatorProvider>
          { children }
        </CommentatorProvider>
      </ScAdditionProvider>
    </SpeedcontrolProvider>
  );
}
