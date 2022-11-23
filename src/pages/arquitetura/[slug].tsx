import ArqNav from 'components/ArqNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_PLUS from 'graphql/queries/getPlus'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { CheckCurrentColor, useTheme } from 'hooks/theme'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  EnsaiosProps,
  PlusProps,
  ProjetosProps,
  ProjetoUnitProps
} from 'types/api'
import { useEffect } from 'react'
import Projeto from '../../templates/projeto'

export default function ProjetoPage({
  projetos,
  ensaios,
  ProjetoUnit,
  plus
}: ProjetosProps & ProjetoUnitProps & EnsaiosProps & PlusProps) {
  CheckCurrentColor()

  const { turnLight } = useTheme()

  useEffect(() => {
    turnLight()
  })
  return (
    <div>
      <ArqNav ensaios={ensaios} projetos={projetos} plus={plus} />
      <Projeto projetos={projetos} ProjetoUnit={ProjetoUnit} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { projetos } = await client.request<ProjetosProps>(GET_PROJETOS)

  const paths = projetos.map((projeto) => {
    return {
      params: { slug: projeto.slug }
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { projetos } = await client.request(GET_PROJETOS)
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { plus } = await client.request(GET_PLUS)

  const ProjetoUnit = projetos.find(
    (projeto: { slug: string | string[] | undefined }) =>
      params!.slug == projeto.slug
  )

  return {
    props: {
      ProjetoUnit,
      ensaios,
      projetos,
      plus
    }
  }
}
