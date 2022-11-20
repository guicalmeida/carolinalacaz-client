import EnsNav from 'components/EnsNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_PLUS from 'graphql/queries/getPlus'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { CheckCurrentColor, useTheme } from 'hooks/theme'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { EnsaiosProps, PlusProps, ProjetosProps } from 'types/api'
import Plus from '../templates/plus'

export default function PlusPage({
  pluses,
  ensaios,
  projetos
}: PlusProps & ProjetosProps & EnsaiosProps) {
  CheckCurrentColor()

  const { turnDark } = useTheme()

  useEffect(() => {
    turnDark()
  })

  return (
    <div>
      <EnsNav ensaios={ensaios} projetos={projetos} />
      <Plus pluses={pluses} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { pluses } = await client.request(GET_PLUS)

  const { ensaios } = await client.request(GET_ENSAIOS)
  const { projetos } = await client.request(GET_PROJETOS)

  return {
    props: {
      pluses,
      ensaios,
      projetos
    }
  }
}
