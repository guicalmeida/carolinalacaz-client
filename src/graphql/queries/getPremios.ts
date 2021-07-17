const GET_PREMIOS = /* GraphQL */ `
  query GET_PREMIOS {
    premios {
      posicao
      slug
      nome
      descricao
      ano {
        ano
      }
      foto {
        name
        url
      }
    }
  }
`

export default GET_PREMIOS
