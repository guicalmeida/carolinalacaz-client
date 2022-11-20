const GET_PREMIOS = /* GraphQL */ `
  query GET_PREMIOS {
    premios(first: 999) {
      posicao
      slug
      nome
      descricao
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

export default GET_PREMIOS
