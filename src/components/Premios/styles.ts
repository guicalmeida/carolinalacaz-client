import styled from 'styled-components'

type BackgroundProps = {
  imgSrc: string
  dark: boolean
}

export const Background = styled.div<BackgroundProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${(props) => props.imgSrc});
  min-height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  z-index: 0;
  background-position: bottom;
  position: relative;

  & * {
    z-index: 2;
  }
  & h2,
  h3,
  a {
    color: ${(props) => (props.dark ? '#FFF' : '#373435')};
  }
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.dark ? '#373435' : '#FFF')};
    opacity: 0.9;
    z-index: 1;
  }
`

export const PremioTitle = styled.h2`
  font-weight: 600;
  font-size: 4rem;
  text-align: center;
  text-transform: uppercase;
  width: 80vw;
  max-width: 70rem;

  @media (max-width: 767px) {
    font-size: 3rem;
    width: 90vw;
  }
`

export const PremioDesc = styled.h3`
  font-weight: 300;
  font-size: 2.5rem;
  text-align: center;
  font-style: italic;

  @media (max-width: 767px) {
    font-size: 2rem;
    margin: 0 5%;
  }
`

export const SliderWrapper = styled.div`
  width: 70rem;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 80vw;
  }
`
export const PremiosWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`

export const ContentWrapper = styled.div`
  margin: auto;
  max-width: 130rem;
  padding-top: 3rem;

  @media (max-width: 767px) {
    padding-bottom: 4rem;
  }
`

export const ToProject = styled.div`
  align-self: flex-end;
  padding: 0 3rem 1.5rem 0;
  font-size: 1.5rem;
  padding-bottom: 2rem;

  @media (max-width: 767px) {
    font-size: 1.2rem;
    padding: 0;
    margin: 0 auto;
    padding-top: 1rem;
  }
`
export const Image = styled.img`
  height: 100%;
  width: 100%;
  max-height: 75vh;
  object-fit: contain;
  pointer-events: none;
`
