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
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
      <title>Recreating Product Page (Lumin)</title>
      <meta name="description" content="Recreating Product Page (Lumin)"></meta>
      <link rel="icon" type="image/png" href="https://lumin-products.vercel.app/favicon.png"></link>
    </Head>
    <Layout>
        <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
