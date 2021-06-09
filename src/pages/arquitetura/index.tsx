import client from 'graphql/client'
import GET_HIGHLIGHTS from 'graphql/queries/getHighlights'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticProps } from 'next'
import { HomeProps, ProjetosProps } from 'types/api'
import Arquitetura from '../../templates/arquitetura'

export default function arquitetura({
  arquiteturaProjetos,
  paginaInicial
}: ProjetosProps & HomeProps) {
  return (
    <>
      <Arquitetura
        arquiteturaProjetos={arquiteturaProjetos}
        paginaInicial={paginaInicial}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { arquiteturaProjetos } = await client.request(GET_PROJETOS)
  const { paginaInicial } = await client.request(GET_HIGHLIGHTS)

  return {
    props: {
      arquiteturaProjetos,
      paginaInicial
    }
  }
}
