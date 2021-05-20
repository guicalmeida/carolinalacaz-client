import * as S from './styles'

type TxtProps = {
  txt: string
}
const OtherProjectsTxt = ({ txt }: TxtProps) => {
  return <S.OtherTxt>{txt}</S.OtherTxt>
}

export default OtherProjectsTxt
