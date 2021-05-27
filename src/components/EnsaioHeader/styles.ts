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

export const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 27px;
  text-align: justify;
  text-align-last: center;
  max-width: 45vw;
  margin: 2rem auto;
`
