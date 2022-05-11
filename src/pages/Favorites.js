import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '@styles/SignStyles';
import { Favs } from '@containers/Favs';

const FavTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0px;
  padding: 0px;
`;

export const Favorites = () => {
  return (
    <>
      <PageWrapper>
        <FavTitle>Favoritos</FavTitle>
        <Favs />
      </PageWrapper>
    </>
  );
};
