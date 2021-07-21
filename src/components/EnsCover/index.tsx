import { EnsaiosProps } from 'types/api'
import * as S from './styles'

const EnsCover = ({ ensaios }: EnsaiosProps) => {
  const fotosDestaque: string[] = []

  ensaios.forEach((ensaio) => {
    ensaio.destaque ? fotosDestaque.push(ensaio.capa.url) : null
  })

  return (
    <S.Container
      imgSrc={
        process.env.NEXT_PUBLIC_IMAGE_HOST +
        fotosDestaque[Math.floor(Math.random() * fotosDestaque.length)]
      }
    >
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
