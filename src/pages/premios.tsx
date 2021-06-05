import client from 'graphql/client'
import GET_PREMIOS from 'graphql/queries/getPremios'
import { GetStaticProps } from 'next'
import { PremioProps } from 'types/api'
import Premios from '../templates/premios/premios'

export default function premios({ premio }: PremioProps) {
  return (
    <div>
      <Premios premio={premio} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { premio } = await client.request(GET_PREMIOS)
  return {
    props: {
      premio
    }
  }
}
