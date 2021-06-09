import { ContentContainer } from 'components/contentContainer'
import { HomeContent } from 'components/HomeContent'
import { NavArq } from 'components/navbar'
import { HomeProps } from 'types/api'

const Home = ({ paginaInicial }: HomeProps) => {
  return (
    <div>
      <NavArq />
      <ContentContainer>
        <HomeContent paginaInicial={paginaInicial} />
      </ContentContainer>
    </div>
  )
}

export default Home
