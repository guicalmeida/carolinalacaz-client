import Link from 'next/link'
import { EnsaiosProps } from 'types/api'
import * as S from './styles'

type OnProjectProps = {
  project: boolean
}

const EnsaiosMosaico = ({
  autoralEnsaios,
  project
}: EnsaiosProps & OnProjectProps) => {
  return (
    <S.Container>
      {autoralEnsaios.map((ensaio) => {
        return (
          <Link
            href={project ? ensaio.slug : 'ensaios/' + ensaio.slug}
            key={ensaio.slug}
          >
            <S.FotoContainer>
              <S.Overlay>
                <S.FichaTecnica>
                  <S.Titulo>{ensaio.Nome}</S.Titulo>
                  <S.Dados>
                    <S.Texto id="cidade">{ensaio.Cidade.Cidade}</S.Texto>{' '}
                    <p> · </p>
                    <S.Texto id="ano">{ensaio.Ano.Ano}</S.Texto>
                  </S.Dados>
                </S.FichaTecnica>
              </S.Overlay>
              <S.Foto src={`http://localhost:1337${ensaio.Capa.url}`} />
            </S.FotoContainer>
          </Link>
        )
      })}
    </S.Container>
  )
}

export default EnsaiosMosaico
