import styled from 'styled-components'

export const EnsTitle = styled.h1`
  font-weight: 600;
  font-size: clamp(4rem, 5vw, 6rem);
  text-align: center;
  margin: 0 auto;
  @media (max-width: 767px) {
    margin: 0 2rem;
  }
`
