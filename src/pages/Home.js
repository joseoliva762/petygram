import React from 'react';
import styled from 'styled-components';
import { CategoriesList } from '@components/CategoriesList';
import { PhotoCardList } from '@components/PhotoCardList';

const HomeWrapper = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  min-height: 100%;
  overflow-x: hidden;
  padding: 24px 0px;
  width: 100%;
`;

export const Home = ({ categoryId }) => {
  return (
    <>
      <HomeWrapper>
        <CategoriesList />
        <PhotoCardList categoryId={categoryId} />
      </HomeWrapper>
    </>
  );
};
