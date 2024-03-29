import Foto from 'components/Foto'
import Link from 'next/link'
import { EnsaiosProps } from 'types/api'
import * as S from './styles'

type OnProjectProps = {
  project: boolean
}

const EnsaiosMosaico = ({
  ensaios,
  project
}: EnsaiosProps & OnProjectProps) => {
  return (
    <S.Container>
      {ensaios.map((ensaio) => {
        return (
          <Link
            href={project ? ensaio.slug : 'ensaios/' + ensaio.slug}
            key={ensaio.slug}
          >
            <S.FotoContainer>
              <S.Overlay>
                <S.FichaTecnica>
                  <S.Titulo>{ensaio.nome}</S.Titulo>
                  <S.Dados>
                    <S.Texto id="cidade">{ensaio.cidade.nome}</S.Texto>{' '}
                    <p> · </p>
                    <S.Texto id="ano">{ensaio.ano.ano}</S.Texto>
                  </S.Dados>
                </S.FichaTecnica>
              </S.Overlay>
              <Foto url={ensaio.capa.url} />
            </S.FotoContainer>
          </Link>
        )
      })}
    </S.Container>
  )
}

export default EnsaiosMosaico
