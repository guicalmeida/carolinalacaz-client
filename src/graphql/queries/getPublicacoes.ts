const GET_PUBLICACOES = /* GraphQL */ `
  query GET_PUBLICACOES {
    publicacaos {
      nome
      slug
      url
      ano {
        ano
      }
      arquitetura_projeto {
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
