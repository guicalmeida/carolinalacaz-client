import ArqNav from 'components/ArqNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_PLUS from 'graphql/queries/getPlus'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { CheckCurrentColor, useTheme } from 'hooks/theme'
import { GetStaticProps } from 'next'
import { EnsaiosProps, PlusProps, ProjetosProps } from 'types/api'
import { useEffect } from 'react'
import Orcamento from '../templates/orcamento/orcamento'

export default function OrcamentoPage({
  ensaios,
  projetos,
  plus
}: ProjetosProps & EnsaiosProps & PlusProps) {
  CheckCurrentColor()

  const { turnLight } = useTheme()

  useEffect(() => {
    turnLight()
  })

  return (
    <div>
      <ArqNav ensaios={ensaios} projetos={projetos} plus={plus} />
      <Orcamento />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { projetos } = await client.request(GET_PROJETOS)
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { plus } = await client.request(GET_PLUS)

  return {
    props: {
      ensaios,
      projetos,
      plus
    }
  }
}
