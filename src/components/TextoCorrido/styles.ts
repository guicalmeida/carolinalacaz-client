import styled from 'styled-components'

export const TextoCorrido = styled.div`
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  text-align: justify;
  color: ${(props) => props.theme.colors.txt};

  & p {
    margin-bottom: 1.5rem;
  }
`
