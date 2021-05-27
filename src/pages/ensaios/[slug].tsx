import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { EnsaiosProps, EnsaioUnitProps } from 'types/api'
import Ensaio from '../../templates/ensaio/ensaio'

export default function ensaio({
  EnsaioUnit,
  autoralEnsaios
}: EnsaioUnitProps & EnsaiosProps) {
  return (
    <div>
      <Ensaio autoralEnsaios={autoralEnsaios} EnsaioUnit={EnsaioUnit} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { autoralEnsaios } = await client.request<EnsaiosProps>(GET_ENSAIOS)

  const paths = autoralEnsaios.map((ensaio) => {
    return {
      params: { slug: ensaio.slug }
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { autoralEnsaios } = await client.request<EnsaiosProps>(GET_ENSAIOS)

  const EnsaioUnit = autoralEnsaios.find(
    (ensaio) => params!.slug == ensaio.slug
  )

  return {
    props: {
      EnsaioUnit,
      autoralEnsaios
    }
  }
}
