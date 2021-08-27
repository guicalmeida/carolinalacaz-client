import EnsNav from 'components/EnsNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_PLUS from 'graphql/queries/getPlus'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticProps } from 'next'
import { EnsaiosProps, PlusProps, ProjetosProps } from 'types/api'
import Contato from '../templates/contato/contato'

export default function contato({
  ensaios,
  projetos,
  plus
}: ProjetosProps & EnsaiosProps & PlusProps) {
  return (
    <div>
      <EnsNav ensaios={ensaios} projetos={projetos} plus={plus}/>
      <Contato />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { projetos } = await client.request(GET_PROJETOS)
  const { plus } = await client.request(GET_PLUS)

  return {
    props: {
      projetos,
      ensaios,
      plus
    }
  }
}
