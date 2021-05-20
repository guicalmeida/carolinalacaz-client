import CustomThemeProvider from 'hooks/theme'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <Head>
        <title>Carolina Lacaz | Fotografia</title>
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Project Starter com typescript, React, NextJS, Styled Components e Jester para testes."
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;600&display=swap"
          rel="stylesheet"
        />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </CustomThemeProvider>
  )
}

export default App
