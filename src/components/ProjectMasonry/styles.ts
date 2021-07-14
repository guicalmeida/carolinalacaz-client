import styled from 'styled-components'
import Masonry from 'react-masonry-css'

export const PicWrapper = styled.div`
  position: relative;
  padding: 0.5rem;
  width: 100%;
  object-fit: contain;

  & > img {
    object-fit: contain;
    display: block;
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
    margin: 0 0.5rem;
    max-width: 40rem;
    @media (max-width: 767px) {
      margin: 0 4rem;
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
