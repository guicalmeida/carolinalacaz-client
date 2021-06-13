import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_HIGHLIGHTS from 'graphql/queries/getHighlights'
import { GetStaticProps } from 'next'
import { EnsaiosProps, HomeProps } from 'types/api'
import Ensaios from '../../templates/ensaios'

export default function ensaios({ ensaios, home }: EnsaiosProps & HomeProps) {
  return (
    <>
      <Ensaios ensaios={ensaios} home={home} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { ensaios } = await client.request(GET_ENSAIOS)
  const { home } = await client.request(GET_HIGHLIGHTS)

  return {
    props: {
      ensaios,
      home
    }
  }
}
