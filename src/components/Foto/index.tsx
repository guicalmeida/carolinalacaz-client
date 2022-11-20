import * as S from './styles'

type PicProps = {
  url: string
}

const Foto = ({ url }: PicProps) => {
  return <S.Foto src={url} loading="lazy" />
}

export default Foto
