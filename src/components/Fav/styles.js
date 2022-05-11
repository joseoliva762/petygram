import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Link = styled(LinkRouter)`
  align-items: center;
  display: flex;
  height: 140px;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, 140px);
  width: 100%;
  @media (max-width: 613px) {
    place-content: center;
  }
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
