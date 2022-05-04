import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Navigation = styled.nav`
  align-items: center;
  background: #fff;
  display: flex;
  gap: 8px;
  height: 100%;
  justify-content: space-around;
  padding: 0 12px;
  overflow: hidden;
`;

export const Link = styled(LinkRouter)`
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #000;
  display: flex;
  font-size: 16px;
  height: 44px;
  justify-content: center;
  min-width: 44px;
  outline: none;
  padding: 4px;
  text-decoration: none;
  text-align: center;

  @media (min-width: 613px) {
    &:hover {
      background: #fafafa;
      border: 1px solid #ccc;
    }
  }
`;
