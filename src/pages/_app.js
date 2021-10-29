/* eslint-disable */
import React from 'react';
import Head from 'next/head';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import Layout from '../components/layout/AppLayout';
import '../scss/globals.scss';

const client = new ApolloClient({
  uri: ' https://pangaea-interviews.now.sh/api/graphql',
  cache: new InMemoryCache(),
});

const App = ({
  Component,
  pageProps,
}) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  </>
);

export default App;
