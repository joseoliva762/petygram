import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from '@components/Header';
import { PhotoCardWithQuery } from '@containers/PhotoCardWithQuery';
import { Home } from '@pages/Home';

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
  const search = window.location.search;
  const urlParams = new URLSearchParams(search);
  const detailId = urlParams.get('detail');
  return (
    <>
      <GlobalStyles />
      <Header />
      <Layout>
        {detailId ? (
          <PhotoCardWithQuery id={detailId} />
        ) : (
          <Router>
            <Home path="/" />
            <Home path="/categories/:categoryId" />
          </Router>
        )}
      </Layout>
    </>
  );
};
