import styled from 'styled-components';
import { fadeIn } from './../../styles/animation';
import { Link as LinkRouter } from '@reach/router';

export const CardWrapper = styled.article`
  align-items: center;
  background: #fff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  display: flex;
  /* filter: drop-shadow(rgba(0, 0, 0, 0.067) 0px 1px 6px); */
  flex-direction: column;
  gap: 4px;
  min-height: 200px;
  overflow: hidden;
  width: 100%;

  @media (max-width: 613px) {
    border-radius: 0;
    border: none;
    filter: none;
  }
`;

export const Link = styled(LinkRouter)`
  align-items: center;
  background-color: #fafafa;
  display: flex;
  gap: 4px;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: block;
  overflow: hidden;
  width: 100%;
`;

export const Image = styled.img`
  ${fadeIn()};
  height: 100%;
  object-fit: contain;
  top: 0;
  width: 100%;
`;

export const Button = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 4px;
  display: flex;
  gap: 4px;
  justify-content: flex-start;
  margin: 0;
  padding: 8px 16px;
  width: 100%;

  div {
    align-items: center;
    display: flex;
    justify-content: center;

    &:hover {
      cursor: pointer;
      filter: brightness(1.1);
    }
  }

  p {
    color: #262626;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
