import client from 'graphql/client'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ProjetosProps, ProjetoUnitProps } from 'types/api'
import Projeto from '../../templates/projeto'

export default function projeto({
  arquiteturaProjetos,
  ProjetoUnit
}: ProjetosProps & ProjetoUnitProps) {
  return (
    <div>
      <Projeto
        arquiteturaProjetos={arquiteturaProjetos}
        ProjetoUnit={ProjetoUnit}
      />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { arquiteturaProjetos } = await client.request<ProjetosProps>(
    GET_PROJETOS
  )

  const paths = arquiteturaProjetos.map((projeto) => {
    return {
      params: { slug: projeto.slug }
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { arquiteturaProjetos } = await client.request<ProjetosProps>(
    GET_PROJETOS
  )

  const ProjetoUnit = arquiteturaProjetos.find(
    (projeto) => params!.slug == projeto.slug
  )

  return {
    props: {
      ProjetoUnit,
      arquiteturaProjetos
    }
  }
}
