import styled from 'styled-components'

export const TextoCorrido = styled.div`
  font-weight: 300;
  font-size: clamp(12px, 5vw, 18px);
  text-align: justify;
  color: ${(props) => props.theme.colors.txt};
  margin: 0 auto;

  & p {
    margin-bottom: 1.5rem;
  }
`
