import * as S from './styles'
import Link from 'next/link'

type ItemProps = {
  link: string
  text: string
}

const NavItem = ({ link, text }: ItemProps) => (
  <S.Option>
    <Link href={link}>
      <S.Link>{text}</S.Link>
    </Link>
  </S.Option>
)

const Navbar = () => (
  <S.Nav>
    <Link href="/">
      <S.Logotipo src="/img/logo_black.png" alt="logo da carol" />
    </Link>
    <S.List>
      <NavItem link="/arquitetura" text="Arquitetura" />
      <NavItem link="/" text="Ensaios" />
      <NavItem link="/" text="+++" />
      <NavItem link="/" text="Sobre" />
      <NavItem link="/" text="Publicações" />
      <NavItem link="/" text="Orçamento" />
    </S.List>
    <S.MenuHolder>
      <S.Ico
        className="iconify"
        data-icon="bx:bx-search"
        data-inline="false"
        data-rotate="90deg"
      ></S.Ico>
      <S.Busca />
      <S.Ico
        className="iconify"
        data-icon="akar-icons:instagram-fill"
        data-inline="false"
      ></S.Ico>
    </S.MenuHolder>
  </S.Nav>
)

export default Navbar
