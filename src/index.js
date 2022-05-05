import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createRoot } from 'react-dom/client';
import { App } from '@src/App';
import { UserProvider } from '@hooks/useUser';

const container = document.getElementById('app');
const client = new ApolloClient({
  uri: 'https://petygram-server.vercel.app/graphql',
  cache: new InMemoryCache()
});

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
