import React from 'react';
import { CategoriesList } from '@components/CategoriesList';
import { GlobalStyles } from '@src/GlobalStyles';
import styled from 'styled-components';

const Layout = styled.div`
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  filter: drop-shadow(rgba(0, 0, 0, 0.067) 0px 1px 6px);
  min-height: 100%;
  overflow-x: hidden;
  padding-bottom: 10px;
`;

export const App = () => {
  return (
    <>
      <Layout>
        <GlobalStyles />
        <CategoriesList />
      </Layout>
    </>
  );
};
