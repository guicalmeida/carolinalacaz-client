import EnsNav from 'components/EnsNav'
import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'

import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticPaths, GetStaticProps } from 'next'
import { EnsaiosProps, EnsaioUnitProps, ProjetosProps } from 'types/api'
import Ensaio from '../../templates/ensaio/ensaio'

export default function ensaio({
  EnsaioUnit,
  projetos,
  ensaios
}: EnsaioUnitProps & EnsaiosProps & ProjetosProps) {
  return (
    <div>
      <EnsNav ensaios={ensaios} projetos={projetos} />
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

  const EnsaioUnit = ensaios.find(
    (ensaio: { slug: string | string[] | undefined }) =>
      params!.slug == ensaio.slug
  )

  return {
    props: {
      EnsaioUnit,
      projetos,
      ensaios
    }
  }
}
