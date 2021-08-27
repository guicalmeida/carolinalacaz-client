const GET_PROJETOS = /* GraphQL */ `
  query GET_PROJETOS {
    projetos {
      nome
      ano {
        ano
      }
      cidade {
        nome
      }
      slug
      galeria {
        name
        url
      }
      capa {
        name
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
