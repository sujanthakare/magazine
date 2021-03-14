import React, { Fragment } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';
import Head from 'next/head';
import NavBar from '@/components/navBar';
import { Global } from '@emotion/react';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { locale, defaultLocale } = useRouter();

  return (
    <Fragment>
      <Head>
        <meta property="og:locale" content={locale} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Global
        styles={{
          '*': {
            padding: 0,
            margin: 0,
          },
        }}
      />
      <NavBar />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
