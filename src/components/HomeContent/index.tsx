import Link from 'next/link'
import * as S from './style'

export type ContainerProps = {
  align: 'left' | 'right'
}

export const HomeContent = () => {
  return (
    <S.Container>
      <Link href="/arquitetura">
        <S.Card align="left" className="arquiteturaCard">
          <S.Title>Arquitetura</S.Title>
          <S.Photo src="img/capa_arq.jpg" alt="img" />
        </S.Card>
      </Link>
      <Link href="/arquitetura">
        <S.Card align="right" className="ensaiosCard">
          <S.Photo src="img/capa_ensaios.jpg" alt="img" className="EnsPhoto" />
          <S.Title>Ensaios</S.Title>
        </S.Card>
      </Link>
    </S.Container>
  )
}
