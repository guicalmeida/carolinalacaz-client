import client from 'graphql/client'
import GET_HIGHLIGHTS from 'graphql/queries/getHighlights'
import { GetStaticProps } from 'next'
import { HomeProps } from 'types/api'
import Home from '../templates/home'

export default function Inicial({ home }: HomeProps) {
  return (
    <div>
      <Home home={home} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { home } = await client.request(GET_HIGHLIGHTS)
  return {
    props: {
      home
    }
  }
}
