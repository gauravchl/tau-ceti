import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import './index.css';
import Home from './containers/Home';

const { REACT_APP_GRAPHQL_URL, REACT_APP_GRAPHQL_WS_URL } = process.env;

const wsLink = new WebSocketLink({
  uri: REACT_APP_GRAPHQL_WS_URL,
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: REACT_APP_GRAPHQL_URL,
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>,
  document.getElementById('root')
);
