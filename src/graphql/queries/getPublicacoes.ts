const GET_PUBLICACOES = /* GraphQL */ `
  query GET_PUBLICACOES {
    publicacaos(where: { projeto_null: false }) {
      nome
      slug
      url
      ano {
        ano
      }
      projeto {
        id
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
