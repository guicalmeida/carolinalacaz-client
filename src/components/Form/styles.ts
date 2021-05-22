import styled from 'styled-components'

export const Container = styled.div``

export const Label = styled.label`
  font-weight: 300;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.bg};
  border-color: ${(props) => props.theme.colors.txt};
  border-width: 1px;
  height: 3rem;
  width: 41rem;
  padding-left: 0.5rem;

  &:focus,
  &:active {
    outline: none;
  }
`
