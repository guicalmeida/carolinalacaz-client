import { ReactNode } from 'react'
import * as S from './styles'

type TxtProps = {
  children: ReactNode
}
const ChangePage = ({ children }: TxtProps) => {
  return <S.ChangePage>{children}</S.ChangePage>
}

export default ChangePage
