import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Estúdio Kant - Boilerplate</title>
        <link rel="shortcut icon" href="img/logo-512.png" />
        <link rel="apple-touch-icon" href="img/logo-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Project Starter com typescript, React, NextJS, Styled Components e Jester para testes."
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
