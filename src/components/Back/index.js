import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #000;
  padding: 4px 12px;
  text-decoration: none;

  &:hover {
    background: #cccccc44;
    cursor: pointer;
  }
`;

export const Back = ({ path }) => {
  return <Anchor href={path || '/'}>Back</Anchor>;
};
