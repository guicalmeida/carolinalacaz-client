import styled from 'styled-components'

type BackgroundProps = {
  imgSrc: string
}

export const PremiosWrapper = styled.div`
  margin: auto;

  & > h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`
export const Background = styled.div<BackgroundProps>`
  overflow: hidden;
  background-image: url(${(props) => props.imgSrc});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 0;
  background-position: bottom;

  & * {
    z-index: 2;
  }

  &:after {
    position: absolute;
    content: '';
    width: 100vw;
    background-color: ${(props) => props.theme.colors.bg};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.9;
    z-index: 1;
  }
`

export const ToPublicacoes = styled.div`
  align-self: flex-end;
  padding-bottom: 1.5rem;
  font-size: 1.5rem;
`
