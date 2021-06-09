import { HomeProps } from 'types/api'
import * as S from './styles'

const EnsCover = ({ paginaInicial }: HomeProps) => {
  return (
    <S.Container
      imgSrc={process.env.NEXT_PUBLIC_IMAGE_HOST + paginaInicial.Ensaios.url}
    >
      <h1>ENSAIOS</h1>
    </S.Container>
  )
}

export default EnsCover
