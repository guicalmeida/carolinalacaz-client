const GET_ENSAIOS = /* GraphQL */ `
  query GET_ENSAIOS {
    ensaios(first: 999) {
      nome
      slug
      descricao {
        html
      }
      descricaoCurta {
        html
      }
      galeria {
        fileName
        url
      }
      capa {
        fileName
        url
      }
      cidade {
        nome
      }
      ano {
        ano
      }
      prioridade
      destaque
    }
  }
`

export default GET_ENSAIOS
