import React, { Suspense } from 'react';
import { Router, Redirect } from '@reach/router';
import { GlobalStyles } from '@styles/GlobalStyles';
import { Header } from '@components/Header';
import { useUser } from '@hooks/useUser';
import styled from 'styled-components';
import { LoadingSpin } from '@components/LoadingSpin';

// Lazy loading
const Home = React.lazy(() => import('@pages/Home'));
const Details = React.lazy(() => import('@pages/Details'));
const Favorites = React.lazy(() => import('@pages/Favorites'));
const User = React.lazy(() => import('@pages/User'));
const NotRegistred = React.lazy(() => import('@pages/NotRegistred'));
const NotFound = React.lazy(() => import('@pages/NotFound'));

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
  const { user } = useUser();

  return (
    <>
      <Suspense fallback={<LoadingSpin />}>
        <GlobalStyles />
        <Header />
        <Layout>
          <Router style={{ width: '100%' }}>
            <NotFound default />
            <Home path="/" style="width: 100%" />
            <Home path="/categories/:categoryId" />
            <Details path="/details/:detailId" />
            {!user.isAuth && <NotRegistred path="/login" />}
            {!user.isAuth && <Redirect noThrow from="/favorites" to="/login" />}
            {!user.isAuth && <Redirect noThrow from="/users" to="/login" />}
            {user.isAuth && <Redirect noThrow from="/login" to="/" />}
            <Favorites path="/favorites" />
            <User path="/users" />
          </Router>
        </Layout>
      </Suspense>
    </>
  );
};
