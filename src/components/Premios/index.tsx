import { PremioProps } from 'types/api'
import * as S from './styles'

const Premio = ({ premios }: PremioProps) => {
  let color = false

  return (
    <S.PremiosWrapper>
      {premios
        .sort((a, b) => (a.ano?.ano > b.ano?.ano ? -1 : 1))
        .map((premio) => {
          color = !color
          return (
            <S.Background
              imgSrc={
                premio.foto.url
                  ? process.env.NEXT_PUBLIC_IMAGE_HOST + premio.foto.url
                  : ''
              }
              key={premio.slug}
              dark={color}
              id={premio.slug}
            >
              <S.ContentWrapper>
                <S.TxtWrapper>
                  <S.PremioTitle>
                    {premio?.nome ? premio.nome : ''}{' '}
                    {premio?.ano?.ano ? ' - ' + premio.ano.ano : ''}
                  </S.PremioTitle>
                  <S.PremioDesc>
                    {premio?.posicao ? premio.posicao : ''}
                    {premio?.posicao ? <br /> : null}

                    {premio?.descricao ? premio.descricao : ''}
                  </S.PremioDesc>
                </S.TxtWrapper>
                <S.SliderWrapper>
                  <S.Image
                    src={
                      premio.foto.url
                        ? process.env.NEXT_PUBLIC_IMAGE_HOST + premio.foto.url
                        : ''
                    }
                  ></S.Image>
                </S.SliderWrapper>
              </S.ContentWrapper>
              <S.ToProject></S.ToProject>
            </S.Background>
          )
        })}
    </S.PremiosWrapper>
  )
}

export default Premio
