import styled from 'styled-components';

export const List = styled.ul`
  align-items: center;
  background: #fff;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  display: flex;
  /* filter: drop-shadow(rgba(0, 0, 0, 0.067) 0px 1px 6px); */
  gap: 4px;
  justify-content: flex-start;
  list-style: none;
  overflow: auto;
  padding: 16px 8px;
  scroll-behavior: smooth;
  scrollbar-width: none;
  top: 0px;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 613px) {
    border-radius: 0;
    border: none;
    filter: none;
  }
`;

export const Item = styled.li`
  padding: 0px 8px;
`;
