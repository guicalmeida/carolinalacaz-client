import client from 'graphql/client'
import GET_SOBRE from 'graphql/queries/getSobre'
import { GetStaticProps } from 'next'
import { SobreProps } from 'types/api'
import Sobre from '../templates/sobre/sobre'

export default function sobre({ sobre }: SobreProps) {
  return (
    <div>
      <Sobre sobre={sobre} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { sobre } = await client.request(GET_SOBRE)
  return {
    props: {
      sobre
    }
  }
}
