import { CustomThemeProvider } from 'hooks/theme'
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'

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
          content="Carolina Lacaz atua profissionalmente como fotógrafa, especializada no campo da fotografia de arquitetura. Em alternância aos trabalhos comerciais, desenvolve ensaios fotográficos capturando o movimento associado a técnica da longa exposição, tanto nos cenários do meio urbano quanto da natureza. "
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <GlobalStyles />
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </CustomThemeProvider>
  )
}

export default App
