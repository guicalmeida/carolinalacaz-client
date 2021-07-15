import EnsNav from 'components/EnsNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_HIGHLIGHTS from 'graphql/queries/getHighlights'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticProps } from 'next'
import { EnsaiosProps, HomeProps, ProjetosProps } from 'types/api'
import Ensaios from '../../templates/ensaios'

export default function ensaios({
  ensaios,
  projetos,
  home
}: HomeProps & ProjetosProps & EnsaiosProps) {
  return (
    <>
      <EnsNav ensaios={ensaios} projetos={projetos} />
      <Ensaios ensaios={ensaios} home={home} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { projetos } = await client.request(GET_PROJETOS)

  const { home } = await client.request(GET_HIGHLIGHTS)

  return {
    props: {
      ensaios,
      projetos,
      home
    }
  }
}
