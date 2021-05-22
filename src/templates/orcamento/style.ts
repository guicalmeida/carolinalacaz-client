import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  width: 48vw;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * {
    text-align: right;
  }
  & a {
    font-weight: 600;
    color: ${(props) => props.theme.colors.txt};
    cursor: pointer;
    text-decoration: underline;
  }
`

export const FormWrapper = styled.div`
  height: 85vh;
  width: 48vw;
  margin: auto auto auto 5rem;
  display: flex;
  align-items: center;
  margin-top: 10rem;
`

export const Container = styled.div`
  display: flex;
  overflow: none;
`
