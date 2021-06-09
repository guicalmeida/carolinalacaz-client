import { HomeProps } from 'types/api'
import * as S from './styles'

const ArqCover = ({ paginaInicial }: HomeProps) => {
  return (
    <S.Container
      imgSrc={
        process.env.NEXT_PUBLIC_IMAGE_HOST + paginaInicial.Arquitetura.url
      }
    >
      <h1>ARQUITETURA</h1>
    </S.Container>
  )
}

export default ArqCover
