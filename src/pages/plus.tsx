import EnsNav from 'components/EnsNav'
import client from 'graphql/client'
import GET_PLUS from 'graphql/queries/getPlus'
import { GetStaticProps } from 'next'
import { PlusProps } from 'types/api'
import Plus from '../templates/plus'

export default function plus({ plus }: PlusProps) {
  return (
    <div>
      <EnsNav />
      <Plus plus={plus} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { plus } = await client.request(GET_PLUS)
  return {
    props: {
      plus
    }
  }
}
