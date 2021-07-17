const GET_ENSAIOS = /* GraphQL */ `
  query GET_ENSAIOS {
    ensaios {
      nome
      slug
      descricao
      descricaoCurta
      galeria {
        name
        url
      }
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
      prioridade
    }
  }
`

export default GET_ENSAIOS
