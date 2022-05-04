import styled from 'styled-components';
import { Link } from '@reach/router';

export const Anchor = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  width: 64px;
`;

export const ImageWrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 50%;
  filter: drop-shadow(rgba(0, 0, 0, 0.067) 0px 1px 6px);
  display: flex;
  height: 64px;
  padding: 2px;
  justify-content: center;
  overflow: hidden;
  width: 64px;
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
`;
