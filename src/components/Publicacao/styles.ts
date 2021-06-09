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
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  z-index: 0;
  background-position: bottom;

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
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => (props.dark ? '#373435' : '#FFF')};
    opacity: 0.9;
    z-index: 1;
  }
`

export const PublicacaoTitle = styled.h2`
  font-weight: 600;
  font-size: 4rem;
  text-align: center;
  text-transform: uppercase;
`

export const PublicacaoDesc = styled.h3`
  font-weight: 300;
  font-size: 2.5rem;
  text-align: center;
  font-style: italic;
`

export const SliderWrapper = styled.div`
  width: 50vw;
`
export const PublicacoesWrapper = styled.div`
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
`

export const ToProject = styled.div`
  align-self: flex-end;
  padding: 0 3rem 1.5rem 0;
  font-size: 1.5rem;
  padding-bottom: 2rem;
`
