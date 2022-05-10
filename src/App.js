import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from '@components/Header';
import { Home } from '@pages/Home';
import { Details } from '@pages/Details';
import { Favorites } from '@pages/Favorites';
import { User } from '@pages/User';
import { NotRegistred } from '@pages/NotRegistred';
import { useUser } from '@hooks/useUser';

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

const AuthGuard = ({ children, user }) => {
  return children({ isAuth: user.isAuth });
};

export const App = () => {
  const { user } = useUser();

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
        <AuthGuard user={user}>
          {({ isAuth }) => {
            const FavoritesPage = isAuth ? Favorites : NotRegistred;
            const UserPage = isAuth ? User : NotRegistred;
            return (
              <Router style={{ width: '100%' }}>
                <FavoritesPage path="/favorites" />
                <UserPage path="/users" />
              </Router>
            );
          }}
        </AuthGuard>
      </Layout>
    </>
  );
};
