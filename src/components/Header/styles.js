import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
  gap: 4px;
  height: 60px;
  justify-content: center;
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
