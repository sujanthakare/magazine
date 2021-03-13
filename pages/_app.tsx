import React, { Fragment } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';
import Head from 'next/head';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { locale, defaultLocale } = useRouter();

  return (
    <Fragment>
      <Head>
        <meta property="og:locale" content={locale} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <div>
        <h1>Router Locale: {locale}</h1>
        <h1>Default Locale: {defaultLocale}</h1>
      </div>
    </Fragment>
  );
};

export default App;
