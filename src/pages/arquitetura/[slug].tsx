import client from 'graphql/client'
import GET_PROJETOS from 'graphql/queries/getProjetos'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ProjetosProps, ProjetoUnitProps } from 'types/api'
import Projeto from '../../templates/projeto'

export default function projeto({
  projetos,
  ProjetoUnit
}: ProjetosProps & ProjetoUnitProps) {
  return (
    <div>
      <Projeto projetos={projetos} ProjetoUnit={ProjetoUnit} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { projetos } = await client.request<ProjetosProps>(GET_PROJETOS)

  const paths = projetos.map((projeto) => {
    return {
      params: { slug: projeto.slug }
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { projetos } = await client.request<ProjetosProps>(GET_PROJETOS)

  const ProjetoUnit = projetos.find((projeto) => params!.slug == projeto.slug)

  return {
    props: {
      ProjetoUnit,
      projetos
    }
  }
}
