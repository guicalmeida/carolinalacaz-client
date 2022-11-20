const GET_PUBLICACOES = /* GraphQL */ `
  query GET_PUBLICACOES {
    publicacaos(first: 999) {
      nome
      slug
      url
      ano {
        ano
      }
      projeto {
        slug
      }
      veiculo {
        nome
      }
      meio
      capa {
        name
        url
      }
      galeria {
        name
        url
      }
    }
  }
`

export default GET_PUBLICACOES
