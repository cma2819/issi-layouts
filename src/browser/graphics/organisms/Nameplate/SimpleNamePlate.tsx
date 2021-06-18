import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  role: 'runner'|'commentator';
};

const Container = styled.div`
  display: inline;
`;

const Icon = styled.i`
  margin-right: 8px;
`;

export const SimpleNameplate = ({ name, role }: Props) => {
  return (
    <Container>
      { role === 'runner' && (
        <Icon className="fas fa-gamepad"></Icon>
      )}
      { role === 'commentator' && (
        <Icon className="fas fa-headset"></Icon>
      )}
      { name }
    </Container>
  );
}