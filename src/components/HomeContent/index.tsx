import Link from 'next/link'
import * as S from './style'

import { useTheme } from '../../hooks/theme'
import { EnsaiosProps, ProjetosProps } from 'types/api'
import { EnsInitialPhoto } from 'components/EnsCoverPhotos'
import { ArqInitialPhoto } from 'components/ArqCoverPhotos'

export const HomeContent = ({
  ensaios,
  projetos
}: EnsaiosProps & ProjetosProps) => {
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
          className="card arquiteturaCard"
          onMouseEnter={handleToLight}
          onMouseLeave={handleToLight}
          onClick={handleToLight}
        >
          <S.Title className="arqTitle">Arquitetura</S.Title>
          <ArqInitialPhoto projetos={projetos} />
        </S.Card>
      </Link>
      <Link href="/ensaios">
        <S.Card
          className="card ensaiosCard"
          onMouseEnter={handleToDark}
          onMouseLeave={handleToLight}
          onClick={handleToDark}
        >
          <EnsInitialPhoto ensaios={ensaios} />
          <S.Title className="ensaioTitle">Ensaios</S.Title>
        </S.Card>
      </Link>
    </S.Container>
  )
}
