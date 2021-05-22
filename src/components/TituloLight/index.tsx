import { ReactNode } from 'react'
import * as S from './styles'

type TLProps = {
  children: ReactNode
}

const TituloLight = ({ children }: TLProps) => {
  return <S.TituloLight>{children}</S.TituloLight>
}

export default TituloLight
