import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const HeaderWrapper = styled.header`
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
  gap: 4px;
  height: 60px;
  justify-content: space-between;
  position: sticky;
  overflow: hidden;
  top: 0;
  width: 100%;
  z-index: 12;

  @media (max-width: 613px) {
    border-radius: 0;
    border: none;
    filter: none;
  }
`;

export const Link = styled(LinkRouter)`
  font-size: 12px;
  text-align: center;
  text-decoration: none;

  @media (min-width: 613px) {
    font-size: 16px;
  }
`;
