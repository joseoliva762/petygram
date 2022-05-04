import React from 'react';
import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

const Link = styled(LinkRouter)`
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
  return <Link to={path || '/'}>Back</Link>;
};
