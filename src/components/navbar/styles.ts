import styled from 'styled-components'

export const Nav = styled.nav`
  height: 10rem;
  position: fixed;
  display: none;
  z-index: 5;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.txt};
  transition: 300ms;

  @media (min-width: 768px) {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
  }
`
export const List = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  transition: 300ms;
`

export const LogoWrapper = styled.div`
  width: 20rem;
  cursor: pointer;
  stroke: ${(props) => props.theme.colors.txt};
  transition: 300ms;
`
export const Option = styled.li`
  font-size: 1.7rem;
  margin: 0 2.5rem;
  cursor: pointer;
`

export const Link = styled.a`
  color: ${(props) => props.theme.colors.txt};
  transition: 300ms;
`

export const Ico = styled.a`
  color: ${(props) => props.theme.colors.txt};
  cursor: pointer;
  transition: 300ms;
  width: 25px;
  height: 25px;

  & > .igIco {
    fill: ${(props) => props.theme.colors.txt};
    width: 100%;
    height: 100%;
  }
`

export const MenuHolder = styled.div`
  display: flex;
  align-items: center;
  transition: 300ms;
`
