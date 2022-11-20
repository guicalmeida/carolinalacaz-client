import EnsNav from 'components/EnsNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'

import GET_PROJETOS from 'graphql/queries/getProjetos'
import { CheckCurrentColor, useTheme } from 'hooks/theme'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { EnsaiosProps, ProjetosProps } from 'types/api'
import Contato from '../templates/contato/contato'

export default function ContatoPage({
  ensaios,
  projetos
}: ProjetosProps & EnsaiosProps) {
  CheckCurrentColor()

  const { turnDark } = useTheme()

  useEffect(() => {
    turnDark()
  })
  return (
    <div>
      <EnsNav ensaios={ensaios} projetos={projetos} />
      <Contato />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { projetos } = await client.request(GET_PROJETOS)

  return {
    props: {
      projetos,
      ensaios
    }
  }
}
