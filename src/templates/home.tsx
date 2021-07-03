import ArqNav from 'components/ArqNav'
import { ContentContainer } from 'components/contentContainer'
import { HomeContent } from 'components/HomeContent'
import { HomeProps } from 'types/api'

const Home = ({ home }: HomeProps) => {
  return (
    <div>
      <ArqNav />
      <ContentContainer>
        <HomeContent home={home} />
      </ContentContainer>
    </div>
  )
}

export default Home
