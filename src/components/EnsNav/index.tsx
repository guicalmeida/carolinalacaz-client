import MobileNav from 'components/mobileNav'
import Nav from 'components/navbar'
import { useTheme } from 'hooks/theme'
import { EnsaiosProps, ProjetosProps } from 'types/api'

const EnsNav = ({ ensaios, projetos }: ProjetosProps & EnsaiosProps) => {
  const { turnDark, turnLight } = useTheme()
  const handleToDark = () => {
    turnDark()
  }
  const handleToLight = () => {
    turnLight()
  }

  const items = [
    {
      text: 'Arquitetura',
      onClick: handleToLight,
      link: '/arquitetura'
    },
    {
      text: 'Ensaios',
      onClick: handleToDark,
      link: '/ensaios'
    },
    {
      text: 'Sobre',
      onClick: handleToLight,
      link: '/sobre'
    },
    // {
    //   text: '+++',
    //   onClick: handleToDark,
    //   link: '/plus'
    // },
    {
      text: 'Prêmios',
      onClick: handleToDark,
      link: '/premios'
    },
    {
      text: 'Contato',
      onClick: handleToDark,
      link: '/contato'
    }
  ]
  return (
    <div>
      <MobileNav items={items} ensaios={ensaios} projetos={projetos} />
      <Nav items={items} ensaios={ensaios} projetos={projetos} />
    </div>
  )
}

export default EnsNav
