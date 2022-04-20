import styled from 'styled-components';

export const List = styled.ul`
  align-items: center;
  display: flex;
  gap: 4px;
  justify-content: flex-start;
  list-style: none;
  overflow: auto;
  padding: 16px 8px;
  scroll-behavior: smooth;
  scrollbar-width: none;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  padding: 0px 8px;
`;
