import { ContentContainer } from 'components/contentContainer'
import { HomeContent } from 'components/HomeContent'
import { HomeProps } from 'types/api'

const Home = ({ home }: HomeProps) => {
  return (
    <div>
      <ContentContainer>
        <HomeContent home={home} />
      </ContentContainer>
    </div>
  )
}

export default Home
