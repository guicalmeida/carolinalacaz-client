import ArqNav from 'components/ArqNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'

import GET_PROJETOS from 'graphql/queries/getProjetos'
import { CheckCurrentColor } from 'hooks/theme'
import { GetStaticProps } from 'next'
import { EnsaiosProps, ProjetosProps } from 'types/api'
import Home from '../templates/home'

export default function InicialPage({
  ensaios,
  projetos
}: ProjetosProps & EnsaiosProps) {
  CheckCurrentColor()

  return (
    <div>
      <ArqNav ensaios={ensaios} projetos={projetos} />
      <Home ensaios={ensaios} projetos={projetos} />
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
