import MobileNav from 'components/mobileNav'
import Nav from 'components/navbar'
import { useTheme } from 'hooks/theme'

const ArqNav = () => {
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
      text: '+++',
      onClick: handleToDark,
      link: '/plus'
    },
    {
      text: 'Sobre',
      onClick: handleToLight,
      link: '/sobre'
    },
    {
      text: 'Publicações',
      onClick: handleToLight,
      link: '/publicacoes'
    },
    {
      text: 'Orçamento',
      onClick: handleToLight,
      link: '/orcamento'
    }
  ]

  return (
    <div>
      <MobileNav items={items} />
      <Nav items={items} />
    </div>
  )
}

export default ArqNav
