import MobileNav from 'components/mobileNav'
import Nav from 'components/navbar'
import { useTheme } from 'hooks/theme'
import { EnsaiosProps, PlusProps, ProjetosProps } from 'types/api'

const ArqNav = ({
  ensaios,
  projetos,
  plus
}: ProjetosProps & EnsaiosProps & PlusProps) => {
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

  plus.turn &&
    items.splice(2, 0, {
      text: '+++',
      onClick: handleToDark,
      link: '/plus'
    })

  return (
    <div>
      <MobileNav items={items} ensaios={ensaios} projetos={projetos} />
      <Nav items={items} ensaios={ensaios} projetos={projetos} />
    </div>
  )
}

export default ArqNav
