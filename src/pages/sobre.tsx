import ArqNav from 'components/ArqNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_PLUS from 'graphql/queries/getPlus'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import GET_SOBRE from 'graphql/queries/getSobre'
import { GetStaticProps } from 'next'
import { EnsaiosProps, PlusProps, ProjetosProps, SobreProps } from 'types/api'
import Sobre from '../templates/sobre/sobre'

export default function sobre({
  sobre,
  ensaios,
  projetos,
  plus
}: SobreProps & ProjetosProps & EnsaiosProps & PlusProps) {
  return (
    <div>
      <ArqNav ensaios={ensaios} projetos={projetos} plus={plus} />
      <Sobre sobre={sobre} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { sobre } = await client.request(GET_SOBRE)
  const { projetos } = await client.request(GET_PROJETOS)
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { plus } = await client.request(GET_PLUS)

  return {
    props: {
      sobre,
      ensaios,
      projetos,
      plus
    }
  }
}
