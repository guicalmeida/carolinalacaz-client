import EnsNav from 'components/EnsNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'

import GET_PREMIOS from 'graphql/queries/getPremios'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { CheckCurrentColor, useTheme } from 'hooks/theme'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { EnsaiosProps, PremioProps, ProjetosProps } from 'types/api'
import Premios from '../templates/premios/premios'

export default function PremiosPage({
  premios,
  ensaios,
  projetos
}: PremioProps & ProjetosProps & EnsaiosProps) {
  CheckCurrentColor()

  const { turnDark } = useTheme()

  useEffect(() => {
    turnDark()
  })

  return (
    <div>
      <EnsNav ensaios={ensaios} projetos={projetos} />
      <Premios premios={premios} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { premios } = await client.request(GET_PREMIOS)
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { projetos } = await client.request(GET_PROJETOS)

  return {
    props: {
      premios,
      ensaios,
      projetos
    }
  }
}
