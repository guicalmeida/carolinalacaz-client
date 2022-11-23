import EnsNav from 'components/EnsNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_PLUS from 'graphql/queries/getPlus'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { CheckCurrentColor, useTheme } from 'hooks/theme'
import { GetStaticProps } from 'next'
import { EnsaiosProps, PlusProps, ProjetosProps } from 'types/api'
import { useEffect } from 'react'
import Ensaios from '../../templates/ensaios'

export default function EnsaiosPage({
  ensaios,
  projetos,
  plus
}: ProjetosProps & EnsaiosProps & PlusProps) {
  CheckCurrentColor()

  const { turnDark } = useTheme()

  useEffect(() => {
    turnDark()
  })
  return (
    <>
      <EnsNav ensaios={ensaios} projetos={projetos} plus={plus} />
      <Ensaios ensaios={ensaios} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { projetos } = await client.request(GET_PROJETOS)
  const { plus } = await client.request(GET_PLUS)

  return {
    props: {
      ensaios,
      projetos,
      plus
    }
  }
}
