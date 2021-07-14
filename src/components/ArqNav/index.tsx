import MobileNav from 'components/mobileNav'
import Nav from 'components/navbar'
import { useTheme } from 'hooks/theme'
import { EnsaiosProps, ProjetosProps } from 'types/api'

const ArqNav = ({ ensaios, projetos }: ProjetosProps & EnsaiosProps) => {
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
      <Nav items={items} ensaios={ensaios} projetos={projetos} />
    </div>
  )
}

export default ArqNav
