import ArqNav from 'components/ArqNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'

import GET_PROJETOS from 'graphql/queries/getProjetos'
import { CheckCurrentColor, useTheme } from 'hooks/theme'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { EnsaiosProps, ProjetosProps } from 'types/api'
import Orcamento from '../templates/orcamento/orcamento'

export default function OrcamentoPage({
  ensaios,
  projetos
}: ProjetosProps & EnsaiosProps) {
  CheckCurrentColor()

  const { turnLight } = useTheme()

  useEffect(() => {
    turnLight()
  })

  return (
    <div>
      <ArqNav ensaios={ensaios} projetos={projetos} />
      <Orcamento />
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
