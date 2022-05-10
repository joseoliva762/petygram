import React from 'react';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { navigate } from '@reach/router';
import { createRoot } from 'react-dom/client';
import { App } from '@src/App';
import { UserProvider } from '@hooks/useUser';

const httpLink = createHttpLink({
  uri: 'https://petygram-server.vercel.app/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token');
  const authorization = token ? `Bearer ${token}` : '';
  return {
    headers: {
      ...headers,
      authorization
    }
  };
});

const authError = ({ networkError }) => {
  console.log('[Network error]:', networkError);
  if (networkError && networkError.result.code === 'invalid_token') {
    sessionStorage.removeItem('token');
    navigate(`/users`);
  }
};

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: onError(authError)
});

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <>
    <UserProvider>
      <ApolloProvider client={client}>
        <App tab="outlet" />
      </ApolloProvider>
    </UserProvider>
  </>
);
