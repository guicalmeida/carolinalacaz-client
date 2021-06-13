import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { EnsaiosProps, EnsaioUnitProps } from 'types/api'
import Ensaio from '../../templates/ensaio/ensaio'

export default function ensaio({
  EnsaioUnit,
  ensaios
}: EnsaioUnitProps & EnsaiosProps) {
  return (
    <div>
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
  const { ensaios } = await client.request<EnsaiosProps>(GET_ENSAIOS)

  const EnsaioUnit = ensaios.find((ensaio) => params!.slug == ensaio.slug)

  return {
    props: {
      EnsaioUnit,
      ensaios
    }
  }
}
