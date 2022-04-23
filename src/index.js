import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@src/App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const container = document.getElementById('app');
const client = new ApolloClient({
  uri: 'https://petygram-server.vercel.app/graphql',
  cache: new InMemoryCache()
});

const root = createRoot(container);
root.render(
  <>
    <ApolloProvider client={client}>
      <App tab="outlet" />
    </ApolloProvider>
  </>
);
