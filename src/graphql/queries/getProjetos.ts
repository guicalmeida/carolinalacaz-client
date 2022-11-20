const GET_PROJETOS = /* GraphQL */ `
  query GET_PROJETOS {
    projetos(first: 999) {
      nome
      ano {
        ano
      }
      cidade {
        nome
      }
      slug
      galeria {
        fileName
        url
      }
      capa {
        fileName
        url
      }
      escritorio {
        nome
      }
      prioridade
      destaque
      tipo {
        nome
      }
    }
  }
`

export default GET_PROJETOS
