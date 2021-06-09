import client from 'graphql/client'
import GET_ENSAIOS from 'graphql/queries/getEnsaios'
import GET_HIGHLIGHTS from 'graphql/queries/getHighlights'
import { GetStaticProps } from 'next'
import { EnsaiosProps, HomeProps } from 'types/api'
import Ensaios from '../../templates/ensaios'

export default function ensaios({
  autoralEnsaios,
  paginaInicial
}: EnsaiosProps & HomeProps) {
  return (
    <>
      <Ensaios autoralEnsaios={autoralEnsaios} paginaInicial={paginaInicial} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { autoralEnsaios } = await client.request(GET_ENSAIOS)
  const { paginaInicial } = await client.request(GET_HIGHLIGHTS)

  return {
    props: {
      autoralEnsaios,
      paginaInicial
    }
  }
}
