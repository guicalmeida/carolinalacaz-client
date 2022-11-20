import ArqNav from 'components/ArqNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'

import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticProps } from 'next'
import { EnsaiosProps, ProjetosProps } from 'types/api'
import Sobre from '../templates/sobre/sobre'

export default function sobre({
  ensaios,
  projetos
}: ProjetosProps & EnsaiosProps) {
  return (
    <div>
      <ArqNav ensaios={ensaios} projetos={projetos} />
      <Sobre />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { projetos } = await client.request(GET_PROJETOS)
  const { ensaios } = await client.request(GET_ENSAIOS)

  return {
    props: {
      ensaios,
      projetos
    }
  }
}
