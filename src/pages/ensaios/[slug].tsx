import EnsNav from 'components/EnsNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_PLUS from 'graphql/queries/getPlus'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { CheckCurrentColor, useTheme } from 'hooks/theme'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  EnsaiosProps,
  EnsaioUnitProps,
  PlusProps,
  ProjetosProps
} from 'types/api'
import { useEffect } from 'react'
import Ensaio from '../../templates/ensaio/ensaio'

export default function EnsaioPage({
  EnsaioUnit,
  projetos,
  ensaios,
  plus
}: EnsaioUnitProps & EnsaiosProps & ProjetosProps & PlusProps) {
  CheckCurrentColor()

  const { turnDark } = useTheme()

  useEffect(() => {
    turnDark()
  })

  return (
    <div>
      <EnsNav ensaios={ensaios} projetos={projetos} plus={plus} />
      <Ensaio ensaios={ensaios} EnsaioUnit={EnsaioUnit} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { ensaios } = await client.request<EnsaiosProps>(GET_ENSAIOS)

  const paths = ensaios.map((ensaio) => {
    return {
      params: { slug: ensaio.slug }
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { projetos } = await client.request(GET_PROJETOS)
  const { plus } = await client.request(GET_PLUS)

  const EnsaioUnit = ensaios.find(
    (ensaio: { slug: string | string[] | undefined }) =>
      params!.slug == ensaio.slug
  )

  return {
    props: {
      EnsaioUnit,
      projetos,
      ensaios,
      plus
    }
  }
}
