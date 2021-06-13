import client from 'graphql/client'
import GET_HIGHLIGHTS from 'graphql/queries/getHighlights'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticProps } from 'next'
import { HomeProps, ProjetosProps } from 'types/api'
import Arquitetura from '../../templates/arquitetura'

export default function arquitetura({
  projetos,
  home
}: ProjetosProps & HomeProps) {
  return (
    <>
      <Arquitetura projetos={projetos} home={home} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { projetos } = await client.request(GET_PROJETOS)
  const { home } = await client.request(GET_HIGHLIGHTS)

  return {
    props: {
      projetos,
      home
    }
  }
}
