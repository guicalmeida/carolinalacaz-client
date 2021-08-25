import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  width: 40vw;
  margin: auto;
  height: 96vh;
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

  & h1 {
    max-width: 50rem;
    margin-left: auto;
  }

  @media (max-width: 767px) {
    width: 90vw;
    justify-content: flex-start;
    margin-top: 10rem;
    height: auto;

    & h1 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 2rem;
    }

    & > div {
      text-align: center;
      margin: 2rem;
    }
  }
`

export const FormWrapper = styled.div`
  height: 85vh;
  width: 47vw;
  margin: auto auto auto 5rem;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    height: auto;
    width: 95vw;
    margin: auto;
    margin-bottom: 5rem;
  }
`

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
`

export const ChangePageContainer = styled.div`
  & > div {
    text-align: center;
  }
`
