const GET_PLUS = /* GraphQL */ `
  query GET_PLUS {
    pluses(first: 999) {
      nome
      cidade {
        nome
      }
      ano {
        ano
      }
      foto {
        fileName
        url
      }
    }
  }
`

export default GET_PLUS
