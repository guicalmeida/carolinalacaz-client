import styled from 'styled-components'
import Masonry from 'react-masonry-css'

export const Container = styled.div``

export const Pic = styled.img`
  width: 30vw;
  object-fit: contain;
  padding: 0.5rem;
`

export const MasonryGrid = styled(Masonry)`
  &.masonryGrid {
    display: flex;
    margin-top: 7rem;
    width: auto;
    justify-content: center;
  }

  & > .MasonryColumn {
    width: 30vw !important;
    margin: 0 0.5rem;
  }
`
