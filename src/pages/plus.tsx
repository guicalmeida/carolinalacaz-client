import EnsNav from 'components/EnsNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_PLUS from 'graphql/queries/getPlus'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticProps } from 'next'
import { EnsaiosProps, PlusProps, ProjetosProps } from 'types/api'
import Plus from '../templates/plus'

export default function plus({
  plus,
  ensaios,
  projetos
}: PlusProps & ProjetosProps & EnsaiosProps) {
  return (
    <div>
      <EnsNav ensaios={ensaios} projetos={projetos} plus={plus} />
      <Plus plus={plus} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { plus } = await client.request(GET_PLUS)

  const { ensaios } = await client.request(GET_ENSAIOS)
  const { projetos } = await client.request(GET_PROJETOS)

  return {
    props: {
      plus,
      ensaios,
      projetos
    }
  }
}
