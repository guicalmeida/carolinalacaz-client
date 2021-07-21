import styled from 'styled-components'

export const FichaTecnica = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.overlayTxt};
  margin: 0 auto 2em 2rem;
  opacity: 0;
  transition: opacity 0.2s linear;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 10;

  @media (max-width: 767px) {
    opacity: 1;
  }
`
export const Titulo = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
`
export const Texto = styled.p`
  font-size: 16px;
`

export const Dados = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: 0 2px;
  }
`

export const FotoContainer = styled.div`
  width: 35rem;
  height: 35rem;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgb(55, 52, 53) 0%,
      rgba(196, 196, 196, 0) 100%
    );
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.2s linear;

    @media (max-width: 767px) {
      opacity: 1;
      background: linear-gradient(
        0deg,
        rgb(55, 52, 53, 0.9) 0%,
        rgba(196, 196, 196, 0) 70%
      );
    }
  }

  &:hover {
    & ${FichaTecnica} {
      opacity: 1;
    }

    &:after {
      opacity: 1;
    }
    transition: opacity 0.2s linear;
  }

  & > img {
    object-fit: cover;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
`
export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > ${FotoContainer} {
    margin: 10px;
  }
`

export const FilterBar = styled.div`
  display: flex;
  align-items: flex-start;
  height: 125px;
  margin: 0 auto;
  margin-top: 4rem;
`

export const Item = styled.li`
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0 3rem;
  color: ${(props) => props.theme.colors.txt};
  display: flex;
  flex-direction: column;
  position: relative;
`

export const ArrowDown = styled.span`
  height: 1rem;
  width: 3rem;
  color: ${(props) => props.theme.colors.txt};
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`
export const FilterBy = styled.div`
  width: 14rem;
  height: 4rem;
  background: ${(props) => props.theme.colors.bg};
  border: 1px solid ${(props) => props.theme.colors.txt};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`
export const Ico = styled.span`
  width: 3.1rem;
  height: 3rem;
  color: ${(props) => props.theme.colors.txt};
`

export const List = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`
export const DropdownItem = styled.a`
  font-size: 1.3rem;
`

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: translateY(30px);
  height: 200px;
  overflow-y: scroll;
  left: 0;
  right: 20px;
  z-index: 10;
  background: white;
`
