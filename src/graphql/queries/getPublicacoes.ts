const GET_PUBLICACOES = /* GraphQL */ `
  query GET_PUBLICACOES {
    publicacoes(first: 999) {
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
        fileName
        url
      }
      galeria {
        fileName
        url
      }
    }
  }
`

export default GET_PUBLICACOES
