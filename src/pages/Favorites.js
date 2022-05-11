import React from 'react';
import styled from 'styled-components';
import { Favs } from '@containers/Favs';

const FavsWrapper = styled.div`
  align-items: flex-start;
  background: transparent;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  max-width: 614px;
  min-height: 100%;
  overflow-x: hidden;
  padding: 0px 8px;
  width: 100%;
`;

const FavTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0px;
  padding: 0px;
`;

export const Favorites = () => {
  return (
    <>
      <FavsWrapper>
        <FavTitle>Favoritos</FavTitle>
        <Favs />
      </FavsWrapper>
    </>
  );
};
