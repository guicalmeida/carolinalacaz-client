import ArqNav from 'components/ArqNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_HIGHLIGHTS from 'graphql/queries/getHighlights'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticProps } from 'next'
import { EnsaiosProps, HomeProps, ProjetosProps } from 'types/api'
import Home from '../templates/home'

export default function Inicial({
  home,
  ensaios,
  projetos
}: HomeProps & ProjetosProps & EnsaiosProps) {
  return (
    <div>
      <ArqNav ensaios={ensaios} projetos={projetos} />
      <Home home={home} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { home } = await client.request(GET_HIGHLIGHTS)
  const { projetos } = await client.request(GET_PROJETOS)
  const { ensaios } = await client.request(GET_ENSAIOS)

  return {
    props: {
      home,
      ensaios,
      projetos
    }
  }
}
