import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from '@components/Header';
import { Home } from '@pages/Home';
import { Details } from '@pages/Details';

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
        <Router style={{ width: '100%' }}>
          <Home path="/" style="width: 100%" />
          <Home path="/categories/:categoryId" />
          <Details path="/details/:detailId" />
        </Router>
      </Layout>
    </>
  );
};
