import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { useEffect } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {

  useEffect(() => { import('@nextworkspace/ui-ng') }, []);
  useEffect(() => { import('@nextworkspace/ui') }, []);

  return (
    <>
      <Head>
        <title>Welcome to host!</title>
      </Head>
      <div className="app">
        <header className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nx-logo-white.svg" alt="Nx logo" width="75" height="50" />
          <h1>Welcome to host!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
