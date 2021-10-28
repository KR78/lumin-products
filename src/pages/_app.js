/* eslint-disable */
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/AppLayout';

const App = ({
  Component,
  pageProps,
}) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
