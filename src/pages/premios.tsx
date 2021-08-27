import EnsNav from 'components/EnsNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_PLUS from 'graphql/queries/getPlus'
import GET_PREMIOS from 'graphql/queries/getPremios'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticProps } from 'next'
import { EnsaiosProps, PlusProps, PremioProps, ProjetosProps } from 'types/api'
import Premios from '../templates/premios/premios'

export default function premios({
  premios,
  ensaios,
  projetos,
  plus
}: PremioProps & ProjetosProps & EnsaiosProps & PlusProps) {
  return (
    <div>
      <EnsNav ensaios={ensaios} projetos={projetos} plus={plus} />
      <Premios premios={premios} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { premios } = await client.request(GET_PREMIOS)
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { projetos } = await client.request(GET_PROJETOS)
  const { plus } = await client.request(GET_PLUS)

  return {
    props: {
      premios,
      ensaios,
      projetos,
      plus
    }
  }
}
