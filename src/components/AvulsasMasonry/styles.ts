import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import { OverlayProps } from '.'

export const Overlay = styled.div`
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 4px;
  right: 0;
  width: 98%;
  opacity: 0;
  transition: 300ms;
  background: ${(props) => props.theme.colors.overlayGradient};
  display: flex;
  align-items: flex-end;
`

export const Pic = styled.img`
  width: 100%;
  object-fit: contain;
  display: block;
  pointer-events: none;
`
export const PicWrapper = styled.div<OverlayProps>`
  position: relative;
  padding: 0.5rem;
  width: 100%;
  object-fit: contain;
  max-height: calc(100vh - 10rem);
  &:hover ${Overlay} {
    opacity: ${(props) => (props.overlay ? '1' : 'none')};
  }
`
export const MasonryGrid = styled(Masonry)`
  &.masonryGrid {
    display: flex;
    margin-top: 7rem;
    margin-bottom: 5rem;
    width: auto;
    justify-content: center;
  }

  & > .MasonryColumn {
    max-width: 40rem;
    margin: 0 0.5rem;

    @media (max-width: 767px) {
      margin: 0 2rem;
    }
  }
`

export const FichaTecnica = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.overlayTxt};
  margin: 0 auto 2em 2rem;
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
