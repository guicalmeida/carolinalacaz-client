const GET_ENSAIOS = /* GraphQL */ `
  query GET_ENSAIOS {
    ensaios {
      nome
      slug
      descricao
      descricaoCurta
      capa {
        name
        url
      }
      cidade {
        nome
      }
      ano {
        ano
      }
    }
  }
`

export default GET_ENSAIOS
