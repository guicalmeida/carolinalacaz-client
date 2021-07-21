import styled from 'styled-components'

export type BGProps = {
  imgSrc: string
}

export const Container = styled.div<BGProps>`
  background-image: url(${(props) => props.imgSrc});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 0;
  background-position: bottom;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`
export const ScrollDown = styled.div`
  position: absolute;
  bottom: 1rem;
  height: 7rem;
  width: 7rem;
  z-index: 2;

  & > svg {
    fill: ${(props) => props.theme.colors.txt};
    width: 100%;
    height: 100%;
    animation: bounce 2s infinite;
    animation-iteration-count: 2;
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`
