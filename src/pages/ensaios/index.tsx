import EnsNav from 'components/EnsNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'

import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticProps } from 'next'
import { EnsaiosProps, ProjetosProps } from 'types/api'
import Ensaios from '../../templates/ensaios'

export default function ensaios({
  ensaios,
  projetos
}: ProjetosProps & EnsaiosProps) {
  return (
    <>
      <EnsNav ensaios={ensaios} projetos={projetos} />
      <Ensaios ensaios={ensaios} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { projetos } = await client.request(GET_PROJETOS)

  return {
    props: {
      ensaios,
      projetos
    }
  }
}
