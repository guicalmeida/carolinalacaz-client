import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: white;
  color: #fafafa;
  height: 10rem;
  position: fixed;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  z-index: 5;
  width: 100vw;
`
export const List = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`

export const Logotipo = styled.img`
  width: 20rem;
  cursor: pointer;
`
export const Option = styled.li`
  font-size: 1.7rem;
  margin: 0 2.5rem;
  cursor: pointer;
`

export const Link = styled.a`
  color: #373435;
`

export const Busca = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  width: 25rem;
  height: 3rem;
  margin-right: 3rem;
  margin-left: 1rem;

  &:focus {
    outline: none;
  }
`

export const Ico = styled.span`
  color: #373435;
  font-size: 25px;
`

export const MenuHolder = styled.div`
  display: flex;
  align-items: center;
`
