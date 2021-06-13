import { ContentContainer } from 'components/contentContainer'
import { HomeContent } from 'components/HomeContent'
import { NavArq } from 'components/navbar'
import { HomeProps } from 'types/api'

const Home = ({ home }: HomeProps) => {
  return (
    <div>
      <NavArq />
      <ContentContainer>
        <HomeContent home={home} />
      </ContentContainer>
    </div>
  )
}

export default Home
