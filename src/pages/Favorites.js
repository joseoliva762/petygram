import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '@styles/SignStyles';
import { Favs } from '@containers/Favs';
import { Meta } from '@components/Meta';

const FavTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0px;
  padding: 0px;
`;

const Favorites = () => {
  return (
    <>
      <Meta title="Favoritos" description="Tus mascotas favoritas" />
      <PageWrapper>
        <FavTitle>Favoritos</FavTitle>
        <Favs />
      </PageWrapper>
    </>
  );
};

export default Favorites;
