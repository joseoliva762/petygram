import React from 'react';
import { CategoriesList } from '@components/CategoriesList';
import { PhotoCardList } from '@components/PhotoCardList';
import { PageWrapper } from '@styles/SignStyles';

export const Home = ({ categoryId }) => {
  return (
    <>
      <PageWrapper>
        <CategoriesList />
        <PhotoCardList categoryId={categoryId} />
      </PageWrapper>
    </>
  );
};
