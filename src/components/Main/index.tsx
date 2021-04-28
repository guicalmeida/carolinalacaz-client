import * as S from './styles'

const Main = ({
  title = 'Estúdio Kant',
  description = 'Lenços e kimonos que multiplicarão as possibilidades de looks do seu armário, deixando mais colorido e versátil!'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/maskable_icon_x512.png"
      alt="Logotipo circular da marca, escrito 'KANT' em destaque e escrito em uma fonte menor 'vestir é pensar'"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.LencoImg
      src="img/lencocianinha.jpg"
      alt="Foto do lenço pequeno Cianinha, que é verde com detalhes em roxo, enrolado em espiral"
    />
  </S.Wrapper>
)

export default Main
