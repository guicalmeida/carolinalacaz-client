import Link from 'next/link'
import * as S from './style'

import { useTheme } from '../../hooks/theme'
import { HomeProps } from 'types/api'

export type ContainerProps = {
  align: 'left' | 'right'
}

export const HomeContent = ({ home }: HomeProps) => {
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
          <S.Photo
            src={process.env.NEXT_PUBLIC_IMAGE_HOST + home.arquitetura.url}
            alt="img"
          />
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
          <S.Photo
            src={process.env.NEXT_PUBLIC_IMAGE_HOST + home.ensaio.url}
            alt="img"
            className="EnsPhoto"
          />
          <S.Title>Ensaios</S.Title>
        </S.Card>
      </Link>
    </S.Container>
  )
}
