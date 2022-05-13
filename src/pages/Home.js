import React from 'react';
import { CategoriesList } from '@components/CategoriesList';
import { PhotoCardList } from '@components/PhotoCardList';
import { PageWrapper } from '@styles/SignStyles';
import { Meta } from '@components/Meta';

const HomePage = ({ categoryId }) => {
  return (
    <>
      <Meta title="Home" description="Bienvenido a tu app de mascotas" />
      <PageWrapper>
        <CategoriesList />
        <PhotoCardList categoryId={categoryId} />
      </PageWrapper>
    </>
  );
};

const Home = React.memo(HomePage, (prevProps, porps) => {
  return prevProps.categoryId === porps.categoryId;
});

export default Home;
