import styled from 'styled-components'

export const Nav = styled.nav`
  z-index: 200;
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.txt};
  transition: 300ms;
  display: none;
  position: fixed;
  top: 0;
  padding: 15px 5px;
  width: 100vw;

  @media (min-width: 768px) {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
  }
`
export const List = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  transition: 300ms;

  @media (min-width: 1340px) {
    width: 720px;
    padding-left: 100px;
  }
`

export const LogoWrapper = styled.div`
  width: 15rem;
  cursor: pointer;
  stroke: ${(props) => props.theme.colors.txt};
  transition: 300ms;
  margin: 0 2rem;

  @media (min-width: 1190px) {
    width: 20rem;
  }
`
export const Option = styled.li`
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 1rem;

  @media (min-width: 1190px) {
    font-size: 1.7rem;
    margin: 0 2.5rem;
  }
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
  margin: 0 2rem 0 0;

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

export const iconHolder = styled.div`
  display: flex;
  align-items: center;
`
