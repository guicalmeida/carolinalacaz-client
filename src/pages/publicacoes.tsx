import client from 'graphql/client'
import GET_PUBLICACOES from 'graphql/queries/getPublicacoes'
import { GetStaticProps } from 'next'
import { PublicacoesProps } from 'types/api'
import Publicacoes from '../templates/publicacoes/publicacoes'

export default function publicacoes({ publicacaos }: PublicacoesProps) {
  return (
    <div>
      <Publicacoes publicacaos={publicacaos} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { publicacaos } = await client.request(GET_PUBLICACOES)
  return {
    props: {
      publicacaos
    }
  }
}
