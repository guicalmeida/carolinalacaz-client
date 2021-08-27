import * as S from './styles'
import Link from 'next/link'
import Logo from 'components/Logo'
import Search from 'components/Search'
import { EnsaiosProps, ProjetosProps } from 'types/api'

type ItemProps = {
  items: {
    link: string
    text: string
    onClick: () => void
  }[]
}

const Nav = ({
  items,
  ensaios,
  projetos
}: ItemProps & ProjetosProps & EnsaiosProps) => {
  return (
    <S.Nav>
      <Link href="/">
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
      </Link>
      <S.List>
        {items.map((item) => (
          <S.Option onClick={item.onClick} key={item.text}>
            <Link href={item.link}>{item.text}</Link>
          </S.Option>
        ))}
      </S.List>
      <S.MenuHolder>
        <Search ensaios={ensaios} projetos={projetos} />
        <S.iconHolder>
          <S.Ico
            href="https://www.instagram.com/carolina.lacaz"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              className="igIco"
              xmlns="http://www.w3.org/2000/svg"
              height="800"
              width="1200"
              viewBox="-100.8 -167.9 873.3 1007.7"
              fill="none"
            >
              <path d="M335.9 0c-91.2 0-102.7.4-138.5 2a246.6 246.6 0 00-81.5 15.6C93.8 26.2 75 37.7 56.4 56.4a164.6 164.6 0 00-38.8 59.5c-8.3 21.3-14 45.8-15.6 81.5a2384 2384 0 00-2 138.5c0 91.2.4 102.7 2 138.5 1.7 35.7 7.3 60.2 15.6 81.5 8.6 22.1 20.1 40.8 38.8 59.5a164.7 164.7 0 0059.5 38.8c21.3 8.3 45.8 14 81.5 15.6 35.8 1.6 47.3 2 138.5 2s102.7-.4 138.5-2c35.7-1.7 60.2-7.3 81.5-15.6 22.1-8.6 40.8-20.1 59.5-38.8a164.7 164.7 0 0038.8-59.5c8.3-21.3 14-45.8 15.6-81.5 1.6-35.8 2-47.3 2-138.5s-.4-102.7-2-138.5a246.6 246.6 0 00-15.6-81.5C645.6 93.8 634 75 615.4 56.4A164.7 164.7 0 00556 17.6c-21.3-8.3-45.8-14-81.5-15.6C438.6.4 427 0 335.9 0zm0 60.5c89.7 0 100.3.4 135.7 2 32.8 1.5 50.6 7 62.4 11.5a104 104 0 0138.6 25.2 104 104 0 0125.1 38.6c4.6 11.8 10.1 29.6 11.6 62.4 1.6 35.4 2 46 2 135.7 0 89.7-.4 100.3-2 135.7-1.5 32.8-7 50.6-11.6 62.4a104 104 0 01-25 38.6 104 104 0 01-38.7 25.1c-11.8 4.6-29.6 10.1-62.4 11.6-35.4 1.6-46 2-135.7 2-89.7 0-100.3-.4-135.7-2-32.8-1.5-50.6-7-62.4-11.6a104 104 0 01-38.6-25A104 104 0 0174 534c-4.6-11.8-10-29.6-11.5-62.4-1.6-35.4-2-46-2-135.7 0-89.7.4-100.3 2-135.7 1.5-32.8 7-50.6 11.5-62.4a104 104 0 0125.2-38.6A104 104 0 01137.8 74c11.8-4.6 29.6-10 62.4-11.5 35.4-1.6 46-2 135.7-2" />
              <path d="M335.9 447.9a112 112 0 110-224 112 112 0 010 224zm0-284.5a172.5 172.5 0 100 345 172.5 172.5 0 000-345m219.6-6.8a40.3 40.3 0 11-80.6 0 40.3 40.3 0 0180.6 0" />
            </svg>
          </S.Ico>
          <S.Ico
            href={
              'mailto:fotografia@carolinalacaz.com?subject=Contato%20-%20Carolina%20Lacaz%20%7C%20Fotografia&body=%0D%0A________%0D%0Aacessado%20via%20https%3A%2F%2Fcarolinalacaz.com'
            }
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mailIco"
            >
              <path
                fill="currentColor"
                d="M16 112v384h480V112zm220.8 229.6a32.167 32.167 0 0038.4 0l23.467-17.6L464 448v16H48v-16l165.333-124zM256 316L48 160v-16h416v16zM48 200l138.667 104L48 408zm416 208L325.333 304 464 200z"
              />
            </svg>
          </S.Ico>
        </S.iconHolder>
      </S.MenuHolder>
    </S.Nav>
  )
}

export default Nav
