import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 41vw;
  height: 50vh;
  padding: 0 2vw;
  position: relative;
  cursor: pointer;
  pointer-events: auto;
  transition: 300ms;
  margin-top: 3rem;

  @media (max-width: 767px) {
    height: 35vh;
    justify-content: center;
    align-items: center;
    padding: 2vh 0;
    width: 90vw;

    &.arquiteturaCard {
      &:after {
        content: '';
        width: 90vw;
        height: 35vh;
        background-color: #ffffff6e;
        position: absolute;
        z-index: 7;
      }
    }

    &.ensaiosCard {
      &:after {
        content: '';
        width: 90vw;
        height: 35vh;
        background-color: #373435ab;
        position: absolute;
        z-index: 7;
      }
    }
  }
  @media (min-width: 768px) {
    max-width: 42%;
    min-width: 30rem;
    max-height: 45rem;
    min-height: 30rem;
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  @media (max-width: 767px) {
    padding-top: 6rem;
  }

  @media (min-width: 768px) {
    width: 100%;
  }

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
  text-transform: uppercase;
  line-height: 7.2rem;
  position: absolute;
  font-size: 4rem;
  font-weight: 100;
  z-index: 8;

  @media (min-width: 768px) {
    font-size: 6rem;
    color: ${(props) => props.theme.colors.txt};
    text-shadow: none;
  }

  &.arqTitle {
    @media (max-width: 767px) {
      color: black;
    }
    @media (min-width: 768px) {
      top: -7rem;
    }
  }

  &.ensaioTitle {
    @media (max-width: 767px) {
      color: white;
    }

    @media (min-width: 768px) {
      bottom: -7rem;
      right: 3rem;
    }
  }
`
