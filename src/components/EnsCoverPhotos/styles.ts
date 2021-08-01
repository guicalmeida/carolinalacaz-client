import styled from 'styled-components'

export type BGProps = {
  imgSrc: string
}

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export const Container = styled.div<BGProps>`
  background-image: url(${(props) => props.imgSrc});
  height: 98vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 0;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
