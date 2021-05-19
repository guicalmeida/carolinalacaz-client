import styled, { css } from 'styled-components'
import { ContainerProps } from '.'

export const Card = styled.div<ContainerProps>`
  ${({ align }) => css`
    text-align: ${align};
    display: flex;
    flex-direction: column;
    width: 58rem;
    height: 51rem;
  `}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  gap: 8rem;

  ${Card} {
    cursor: pointer;
    pointer-events: auto;
    transition: 300ms opacity, 300ms transform;
  }

  .arquiteturaCard:hover,
  .ensaiosCard:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  ${Card}:nth-child(1):hover ~ ${Card}:nth-child(2) {
    transform: scale(0.9);
    opacity: 0.5;
  }

  ${Card}:nth-child(2):hover + ${Card}:nth-child(1) {
    transform: scale(0.9);
    opacity: 0.5;
  }
`

export const Photo = styled.img`
  height: 37rem;
  width: 57rem;
  object-fit: cover;

  &.EnsPhoto {
    margin-top: 7.1rem;
  }
`

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: 100;
  text-transform: uppercase;
  line-height: 7.2rem;
`
