import { ContentContainer } from 'components/contentContainer'
import { HomeContent } from 'components/HomeContent'
import { EnsaiosProps, ProjetosProps } from 'types/api'

const Home = ({ ensaios, projetos }: EnsaiosProps & ProjetosProps) => {
  return (
    <div>
      <ContentContainer>
        <HomeContent ensaios={ensaios} projetos={projetos} />
      </ContentContainer>
    </div>
  )
}

export default Home
