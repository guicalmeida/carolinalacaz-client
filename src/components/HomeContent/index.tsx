import Link from 'next/link'
import * as S from './style'

import { useTheme } from '../../hooks/theme'

export type ContainerProps = {
  align: 'left' | 'right'
}

export const HomeContent = () => {
  const { turnDark, turnLight } = useTheme()
  const handleToDark = () => {
    turnDark()
  }

  const handleToLight = () => {
    turnLight()
  }

  return (
    <S.Container>
      <Link href="/arquitetura">
        <S.Card
          align="left"
          className="card arquiteturaCard"
          onMouseEnter={handleToLight}
          onMouseLeave={handleToLight}
          onClick={handleToLight}
        >
          <S.Title>Arquitetura</S.Title>
          <S.Photo src="img/capa_arq.jpg" alt="img" />
        </S.Card>
      </Link>
      <Link href="/ensaios">
        <S.Card
          align="right"
          className="card ensaiosCard"
          onMouseEnter={handleToDark}
          onMouseLeave={handleToLight}
          onClick={handleToDark}
        >
          <S.Photo src="img/capa_ensaios.jpg" alt="img" className="EnsPhoto" />
          <S.Title>Ensaios</S.Title>
        </S.Card>
      </Link>
    </S.Container>
  )
}
