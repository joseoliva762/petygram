import React from 'react';
import { CategoriesList } from '@components/CategoriesList';
import { PhotoCardList } from '@components/PhotoCardList';

export const Home = () => {
  return (
    <>
      <CategoriesList />
      <PhotoCardList categoryId={2} />
    </>
  );
};
