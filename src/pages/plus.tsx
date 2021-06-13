import client from 'graphql/client'
import GET_PLUS from 'graphql/queries/getPlus'
import { GetStaticProps } from 'next'
import { PlusProps } from 'types/api'
import Plus from '../templates/plus'

export default function plus({ foto }: PlusProps) {
  return (
    <div>
      <Plus foto={foto} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { foto } = await client.request(GET_PLUS)
  return {
    props: {
      foto
    }
  }
}
