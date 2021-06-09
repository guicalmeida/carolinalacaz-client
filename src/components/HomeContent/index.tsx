import Link from 'next/link'
import * as S from './style'

import { useTheme } from '../../hooks/theme'
import { HomeProps } from 'types/api'

export type ContainerProps = {
  align: 'left' | 'right'
}

export const HomeContent = ({ paginaInicial }: HomeProps) => {
  console.log(paginaInicial)

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
            src={
              process.env.NEXT_PUBLIC_IMAGE_HOST + paginaInicial.Arquitetura.url
            }
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
            src={process.env.NEXT_PUBLIC_IMAGE_HOST + paginaInicial.Ensaios.url}
            alt="img"
            className="EnsPhoto"
          />
          <S.Title>Ensaios</S.Title>
        </S.Card>
      </Link>
    </S.Container>
  )
}
