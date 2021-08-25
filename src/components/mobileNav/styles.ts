import styled from 'styled-components'

export const MenuBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background-color: ${(props) => props.theme.colors.bg};
  width: 100vw;
  overflow: hidden;
  height: 7rem;
  z-index: 10;
  box-shadow: 0 0px 20px 0px #000000d4;

  @media (min-width: 768px) {
    display: none;
  }

  & > * {
    padding: 0 1rem;
  }
`

export const MobileContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 2rem;
    height: 1.6rem;
    left: 2rem;
    top: 2.5rem;
    z-index: 11 !important;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background-color: ${(props) => props.theme.colors.txt};
    height: 2px !important;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 4rem;
    width: 4rem;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${(props) => props.theme.colors.txt};
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100vh;
    z-index: 11;
  }

  /* General sidebar styles */
  .bm-menu {
    background-color: ${(props) => props.theme.colors.bg};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    overflow-y: hidden !important;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: ${(props) => props.theme.colors.bg};
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: ${(props) => props.theme.colors.txt};
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    font-size: 2.5rem;
    padding: 1rem 2rem;
  }
`

export const Ico = styled.a`
  color: ${(props) => props.theme.colors.txt};
  cursor: pointer;
  transition: 300ms;
  width: 25px;
  height: 25px;

  & > .igIco {
    fill: ${(props) => props.theme.colors.txt};
    width: 25px;
    height: 25px;
  }

  & > .mailIco {
    fill: ${(props) => props.theme.colors.txt};
    width: 10%;
    padding-bottom: 3.8px;
    padding-left: 16px;
  }
`
export const LogoWrapper = styled.div`
  width: 14rem;
  cursor: pointer;
  stroke: ${(props) => props.theme.colors.txt};
  transition: 300ms;
`

export const BurgerPlaceholder = styled.div`
  width: 2.5rem;
  height: 2rem;
`

export const Close = styled.a`
  position: fixed;
  z-index: 12;
  right: 2rem;
  top: 2rem;
  stroke: ${(props) => props.theme.colors.txt};
  cursor: pointer;
  transition: 300ms;
  height: 25px;
  width: 25px;

  & > .close {
    width: 100%;
    height: 100%;
    stroke-linecap: 'round';
    stroke-linejoin: 'round';
    stroke-width: 2;
  }
`

export const Lupa = styled.a`
  color: ${(props) => props.theme.colors.txt};
  cursor: pointer;
  transition: 300ms;
  height: 25px;
  width: 25px;

  & > .lupa {
    width: 100%;
    height: 100%;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform: rotate(270deg);
  }
`

export const iconHolder = styled.div`
  display: flex;
  align-items: center;
`
