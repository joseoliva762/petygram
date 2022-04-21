import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { CategoriesList } from '@components/CategoriesList';
import { PhotoCardList } from '@components/PhotoCardList';
import { Header } from '@components/Header';

const Layout = styled.div`
  align-items: center;
  background: transparent;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  min-height: 100%;
  overflow-x: hidden;
  max-width: 614px;
  padding: 24px 0px;
  width: 100%;
`;

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Layout>
        <CategoriesList />
        <PhotoCardList />
      </Layout>
    </>
  );
};
