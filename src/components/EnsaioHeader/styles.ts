import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:nth-child(2) {
    margin-bottom: 1.4rem;
  }
`

export const Subtitle = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 3.6rem;
`

export const Description = styled.div`
  font-size: clamp(12px, 5vw, 16px);
  font-weight: 300;
  text-align: justify;
  text-align-last: center;
  max-width: 70%;
  margin: 2rem auto;
`
