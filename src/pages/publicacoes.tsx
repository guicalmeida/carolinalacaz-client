import ArqNav from 'components/ArqNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'

import GET_PROJETOS from 'graphql/queries/getProjetos'
import GET_PUBLICACOES from 'graphql/queries/getPublicacoes'
import { CheckCurrentColor, useTheme } from 'hooks/theme'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { EnsaiosProps, ProjetosProps, PublicacoesProps } from 'types/api'
import Publicacoes from '../templates/publicacoes/publicacoes'

export default function PublicacoesPage({
  publicacoes,
  projetos,
  ensaios
}: PublicacoesProps & ProjetosProps & EnsaiosProps) {
  CheckCurrentColor()

  const { turnLight } = useTheme()

  useEffect(() => {
    turnLight()
  })
  return (
    <div>
      <ArqNav ensaios={ensaios} projetos={projetos} />
      <Publicacoes publicacoes={publicacoes} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { publicacoes } = await client.request(GET_PUBLICACOES)
  const { projetos } = await client.request(GET_PROJETOS)
  const { ensaios } = await client.request(GET_ENSAIOS)

  return {
    props: {
      publicacoes,
      ensaios,
      projetos
    }
  }
}
