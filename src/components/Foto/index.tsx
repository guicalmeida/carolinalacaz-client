import * as S from './styles'

type PicProps = {
  url: string
}

const Foto = ({ url }: PicProps) => {
  return (
    <S.Foto src={process.env.NEXT_PUBLIC_IMAGE_HOST + url} loading="lazy" />
  )
}

export default Foto
