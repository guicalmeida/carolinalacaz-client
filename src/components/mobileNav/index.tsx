import * as S from './styles'
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
import Logo from 'components/Logo'
import { EnsaiosProps, ProjetosProps } from 'types/api'
import MobileSearch from 'components/mobileSearch'
import { useState } from 'react'
import Obfuscate from 'react-obfuscate'

type ItemProps = {
  items: {
    link: string
    text: string
    onClick: () => void
  }[]
}

const MobileNav = ({
  items,
  ensaios,
  projetos
}: ItemProps & ProjetosProps & EnsaiosProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.MobileContainer>
      {isOpen && (
        <>
          <MobileSearch ensaios={ensaios} projetos={projetos} />
          <S.Close onClick={() => setIsOpen(false)}>
            <svg
              className="close"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <defs />
              <path fill="none" d="M2 30L30 2m0 28L2 2" />
            </svg>
          </S.Close>
        </>
      )}
      <Menu>
        {items.map((item) => (
          <span onClick={item.onClick} key={item.text}>
            <Link href={item.link}>{item.text}</Link>
          </span>
        ))}
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
          <Obfuscate
            email="fotografia@carolinalacaz.com"
            headers={{
              subject: 'Contato - Carolina Lacaz | Fotografia',
              body: `
__________
acessado via carolinalacaz.com`
            }}
          >
            <S.Ico>
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
          </Obfuscate>
        </S.iconHolder>
      </Menu>
      <S.MenuBar>
        <S.BurgerPlaceholder />
        <Link href="/">
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>
        </Link>
        <S.Lupa onClick={() => setIsOpen(true)}>
          <svg
            className="lupa"
            width="114"
            height="114"
            viewBox="0 0 114 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 106C3.5 106 23.308 86.1921 36 73.5M36 73.5C51.9468 89.3093 77.5532 89.3093 93.5 73.5C109.585 57.5533 109.585 31.4468 93.5 15.5C77.5532 -0.309259 51.9468 -0.309259 36 15.5C19.9146 31.4468 19.9146 57.5533 36 73.5Z"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.Lupa>
      </S.MenuBar>
    </S.MobileContainer>
  )
}

export default MobileNav
