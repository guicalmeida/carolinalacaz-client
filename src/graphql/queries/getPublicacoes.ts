const GET_PUBLICACOES = /* GraphQL */ `
  query GET_PUBLICACOES {
    publicacaos {
      nome
      slug
      url
      ano {
        Ano
      }
      arquitetura_projeto {
        slug
      }
      veiculo {
        nome
      }
      Meio
      Capa {
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
