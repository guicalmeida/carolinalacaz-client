import client from 'graphql/client'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticProps } from 'next'
import { ProjetosProps } from 'types/api'
import Arquitetura from '../../templates/arquitetura'

export default function arquitetura({ arquiteturaProjetos }: ProjetosProps) {
  return (
    <>
      <Arquitetura arquiteturaProjetos={arquiteturaProjetos} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { arquiteturaProjetos } = await client.request(GET_PROJETOS)
  return {
    props: {
      arquiteturaProjetos
    }
  }
}
