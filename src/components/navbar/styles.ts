import styled from 'styled-components'

export const Nav = styled.nav`
  height: 10rem;
  position: fixed;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.txt};
  transition: 300ms;
  box-sizing: border-box;
  padding: 0 2%;
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

export const Busca = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.txt};
  width: 25rem;
  height: 3rem;
  margin-right: 3rem;
  margin-left: 1rem;
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.txt};
  transition: 300ms;

  &:focus {
    outline: none;
  }
`

export const Ico = styled.a`
  color: ${(props) => props.theme.colors.txt};
  transition: 300ms;
  width: 25px;
  height: 25px;

  & > .lupa {
    width: 100%;
    height: 100%;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

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
