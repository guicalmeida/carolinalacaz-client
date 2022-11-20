import ArqNav from 'components/ArqNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'

import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticProps } from 'next'
import { EnsaiosProps, ProjetosProps } from 'types/api'
import Arquitetura from '../../templates/arquitetura'

export default function arquitetura({
  projetos,
  ensaios
}: ProjetosProps & EnsaiosProps) {
  return (
    <>
      <ArqNav ensaios={ensaios} projetos={projetos} />

      <Arquitetura projetos={projetos} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { projetos } = await client.request(GET_PROJETOS)
  const { ensaios } = await client.request(GET_ENSAIOS)

  return {
    props: {
      projetos,
      ensaios
    }
  }
}
