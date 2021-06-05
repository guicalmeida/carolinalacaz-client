import client from 'graphql/client'
import GET_PLUS from 'graphql/queries/getPlus'
import { GetStaticProps } from 'next'
import { PlusProps } from 'types/api'
import Plus from '../templates/plus'

export default function plus({ fotosAvulsa }: PlusProps) {
  return (
    <div>
      <Plus fotosAvulsa={fotosAvulsa} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { fotosAvulsa } = await client.request(GET_PLUS)
  return {
    props: {
      fotosAvulsa
    }
  }
}
