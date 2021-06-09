import client from 'graphql/client'
import GET_HIGHLIGHTS from 'graphql/queries/getHighlights'
import { GetStaticProps } from 'next'
import { HomeProps } from 'types/api'
import Home from '../templates/home'

export default function Inicial({ paginaInicial }: HomeProps) {
  return (
    <div>
      <Home paginaInicial={paginaInicial} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { paginaInicial } = await client.request(GET_HIGHLIGHTS)
  return {
    props: {
      paginaInicial
    }
  }
}
