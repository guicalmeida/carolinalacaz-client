import ArqNav from 'components/ArqNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_PLUS from 'graphql/queries/getPlus'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import GET_PUBLICACOES from 'graphql/queries/getPublicacoes'
import { CheckCurrentColor, useTheme } from 'hooks/theme'
import { GetStaticProps } from 'next'
import {
  EnsaiosProps,
  PlusProps,
  ProjetosProps,
  PublicacoesProps
} from 'types/api'
import Publicacoes from '../templates/publicacoes/publicacoes'
import { useEffect } from 'react'

export default function PublicacoesPage({
  publicacaos,
  projetos,
  ensaios,
  plus
}: PublicacoesProps & ProjetosProps & EnsaiosProps & PlusProps) {
  CheckCurrentColor()

  const { turnLight } = useTheme()

  useEffect(() => {
    turnLight()
  })
  return (
    <div>
      <ArqNav ensaios={ensaios} projetos={projetos} plus={plus} />
      <Publicacoes publicacaos={publicacaos} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { publicacaos } = await client.request(GET_PUBLICACOES)
  const { projetos } = await client.request(GET_PROJETOS)
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { plus } = await client.request(GET_PLUS)

  return {
    props: {
      publicacaos,
      ensaios,
      projetos,
      plus
    }
  }
}
