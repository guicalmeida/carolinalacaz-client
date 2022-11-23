import ArqNav from 'components/ArqNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_PLUS from 'graphql/queries/getPlus'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { CheckCurrentColor, useTheme } from 'hooks/theme'
import { GetStaticProps } from 'next'
import { EnsaiosProps, PlusProps, ProjetosProps } from 'types/api'
import { useEffect } from 'react'
import Arquitetura from '../../templates/arquitetura'

export default function ArquiteturaPage({
  projetos,
  ensaios,
  plus
}: PlusProps & ProjetosProps & EnsaiosProps) {
  CheckCurrentColor()

  const { turnLight } = useTheme()

  useEffect(() => {
    turnLight()
  })
  return (
    <>
      <ArqNav ensaios={ensaios} projetos={projetos} plus={plus} />

      <Arquitetura projetos={projetos} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { projetos } = await client.request(GET_PROJETOS)
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { plus } = await client.request(GET_PLUS)

  return {
    props: {
      projetos,
      ensaios,
      plus
    }
  }
}
