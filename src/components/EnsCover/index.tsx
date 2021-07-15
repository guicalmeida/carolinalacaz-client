import { HomeProps } from 'types/api'
import * as S from './styles'

const EnsCover = ({ home }: HomeProps) => {
  return (
    <S.Container imgSrc={process.env.NEXT_PUBLIC_IMAGE_HOST + home.ensaio.url}>
      <h1>ENSAIOS</h1>
      <S.ScrollDown>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          viewBox="0 0 50 50"
        >
          <defs />
          <path d="M25 32.4l-9.7-9.7 1.4-1.4 8.3 8.3 8.3-8.3 1.4 1.4z" />
        </svg>
      </S.ScrollDown>
    </S.Container>
  )
}

export default EnsCover
