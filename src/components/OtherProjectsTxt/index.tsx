import { ReactNode } from 'react'
import * as S from './styles'

type TxtProps = {
  children: ReactNode
}
const OtherProjectsTxt = ({ children }: TxtProps) => {
  return <S.OtherTxt>{children}</S.OtherTxt>
}

export default OtherProjectsTxt
