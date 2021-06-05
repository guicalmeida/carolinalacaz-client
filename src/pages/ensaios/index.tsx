import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import { GetStaticProps } from 'next'
import { EnsaiosProps } from 'types/api'
import Ensaios from '../../templates/ensaios'

export default function ensaios({ autoralEnsaios }: EnsaiosProps) {
  return (
    <>
      <Ensaios autoralEnsaios={autoralEnsaios} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { autoralEnsaios } = await client.request(GET_ENSAIOS)
  return {
    props: {
      autoralEnsaios
    }
  }
}
