import styled, { css } from 'styled-components'
import { ContainerProps } from '.'

export const Card = styled.div<ContainerProps>`
  ${({ align }) => css`
    text-align: ${align};
    display: flex;
    flex-direction: column;
    max-width: 55rem;
    min-width: 30rem;
    width: 41vw;
    max-height: 40rem;
    min-height: 30rem;
    height: 50vh;
    padding: 0 2vw;
    position: relative;
  `}
  cursor: pointer;
  pointer-events: auto;
  transition: 300ms;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding-top: 4rem;

  &:hover .card {
    transform: scale(0.9);
    opacity: 0.5;
    filter: blur(5px);
  }

  .card:hover,
  .card:focus,
  .card:active {
    transform: scale(1.1);
    opacity: 1;
    filter: blur(0);
  }
`

export const Photo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: 100;
  text-transform: uppercase;
  line-height: 7.2rem;
  color: ${(props) => props.theme.colors.txt};
  position: absolute;

  &.arqTitle {
    top: -7rem;
  }

  &.ensaioTitle {
    bottom: -7rem;
  }
`
