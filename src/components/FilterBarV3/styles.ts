import styled from 'styled-components'

export const FilterBar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 50;
  margin-top: 10rem;
  width: 100%;
`

export const Item = styled.li`
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0 3rem;
  color: ${(props) => props.theme.colors.txt};
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    align-items: center;
    margin: 2rem 0;
  }
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
  justify-content: center;
  position: relative;
  background-color: #ffffff;
  padding: 2rem;
  padding-top: 1.5rem;
  box-sizing: border-box;
  width: 720px;
  border-radius: 20px;
  margin-top: 2rem;
  border: 1px solid #373435;
  margin-bottom: 7rem;

  &.active {
    padding-bottom: 2.6rem;
  }
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

  &.dialog {
    top: 36px;
    position: absolute;
  }
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
  margin: 0 1rem;
  width: max-content;
  text-align: center;
  padding: 5px 16px;
  margin-bottom: 1rem;
  cursor: pointer;

  &.active {
    background-color: #373435;
    color: white;
    text-align: center;
    border-radius: 15px;
  }

  &.blocked {
    pointer-events: none;
    background-color: #ededed;
    color: #d3d3d3;
    border-radius: 30px;
  }

  @media (max-width: 767px) {
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Dropdown = styled.div`
  cursor: default;
  @media (min-width: 768px) {
    display: flex;
    position: absolute;
    left: -1px;
    top: 6.6rem;
    box-sizing: border-box;
    width: 720px;
    flex-wrap: wrap;
    opacity: 0;
    pointer-events: none;
    animation: none;
    background-color: ${(props) => props.theme.colors.bg};
    z-index: 53;
    border-bottom: 1px solid #373435;
    border-left: 1px solid #373435;
    border-right: 1px solid #373435;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;

    &.active {
      opacity: 1;
      pointer-events: auto;
      animation: motion 0.1s linear;
    }
  }

  @media (max-width: 767px) {
    display: none;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2rem;
    justify-content: center;

    &.active {
      display: flex;
      pointer-events: auto;
      animation: motion 0.1s linear;
    }
  }

  @keyframes motion {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
export const Results = styled.div`
  position: absolute;
  @media (min-width: 768px) {
    width: 700px;
    z-index: 51;
    text-align: center;
  }
  @media (max-width: 767px) {
    position: relative;
    text-align: center;
  }
`
export const MobileFilterContainer = styled.div`
  padding-top: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;
`

export const DialogContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const DialogOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  margin-bottom: 120px;
`

export const Close = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
    & > svg {
      width: 15px;
    }
  }
`

export const Bold = styled.span`
  font-weight: 600;
`
export const RemoveAll = styled.a`
  font-weight: 600;
  cursor: pointer;
`

export const FilterTextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > div > pre {
    white-space: pre-wrap;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;

    & > div {
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`

export const DialogDrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  width: 100%;
  margin-top: 40px;

  & > span {
    margin-bottom: 20px;
  }
`

export const GridLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  justify-content: center;
`

export const ResultsButtonContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  box-shadow: 0px 3px 13px 0px #0000007d;
`

export const SeeResults = styled.button`
  text-align: center;
  padding: 1.2rem 3rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.button};
  color: ${(props) => props.theme.colors.buttonTxt};
  border: none;
  border-radius: 10px;
  text-transform: lowercase;
  font-weight: 600;
  height: 48px;
`