import ArqNav from 'components/ArqNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_HIGHLIGHTS from 'graphql/queries/getHighlights'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticProps } from 'next'
import { EnsaiosProps, HomeProps, ProjetosProps } from 'types/api'
import Arquitetura from '../../templates/arquitetura'

export default function arquitetura({
  projetos,
  ensaios,
  home
}: HomeProps & ProjetosProps & EnsaiosProps) {
  return (
    <>
      <ArqNav ensaios={ensaios} projetos={projetos} />

      <Arquitetura projetos={projetos} home={home} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { projetos } = await client.request(GET_PROJETOS)
  const { ensaios } = await client.request(GET_ENSAIOS)

  const { home } = await client.request(GET_HIGHLIGHTS)

  return {
    props: {
      projetos,
      ensaios,
      home
    }
  }
}
