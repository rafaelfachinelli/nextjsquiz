import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <link rel="icon" href="https://cdn.iconscout.com/icon/free/png-512/james-bond-555305.png" />
        <meta name="title" content="007: Quiz" />
        <meta name="description" content="Mostre seu conhecimento sobre o agente mais famoso do mundo." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="007: Quiz" />
        <meta property="og:description" content="Mostre seu conhecimento sobre o agente mais famoso do mundo." />
        <meta property="og:image" content="https://i.ytimg.com/vi/SuV05toJoiM/maxresdefault.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="007: Quiz" />
        <meta property="twitter:description" content="Mostre seu conhecimento sobre o agente mais famoso do mundo." />
        <meta property="twitter:image" content="https://i.ytimg.com/vi/SuV05toJoiM/maxresdefault.jpg" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
