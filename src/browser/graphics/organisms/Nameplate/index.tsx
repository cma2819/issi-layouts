import React from 'react';

type Props = {
  name: string;
};

export const Nameplate = ({ name }: Props) => {
  return (
    <React.Fragment>
      <i className="fas fa-gamepad"></i>
      { name }
    </React.Fragment>
  );
}