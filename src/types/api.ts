export type anoProps = {
  ano: number
}
export type cidadeProps = {
  nome: string
}
export type ImagemProps = {
  name: string
  url: string
}

export type EnsaioUnitProps = {
  EnsaioUnit: {
    nome: string
    descricaoCurta: string
    descricao: string
    slug: string
    ano: anoProps
    cidade: cidadeProps
    galeria: ImagemProps[]
    capa: ImagemProps
  }
}

export type EnsaiosProps = {
  ensaios: {
    nome: string
    descricaoCurta: string
    descricao: string
    slug: string
    ano: anoProps
    cidade: cidadeProps
    galeria: ImagemProps[]
    capa: ImagemProps
    destaque: boolean
    prioridade: number
  }[]
}

export type ProjetoUnitProps = {
  ProjetoUnit: {
    nome: string
    descricao: string
    slug: string
    ano: anoProps
    cidade: cidadeProps
    galeria: ImagemProps[]
    capa: ImagemProps
    escritorio: {
      nome: string
    }
  }
}

export type ProjetosProps = {
  projetos: {
    nome: string
    descricao: string
    slug: string
    ano: anoProps
    cidade: cidadeProps
    galeria: ImagemProps[]
    capa: ImagemProps
    prioridade: number
    destaque: boolean
    escritorio: {
      nome: string
    }
    tipo: {
      nome: string
    }
  }[]
}

export type SobreProps = {
  sobre: {
    nome: string
    descricao: string
    foto: ImagemProps
  }
}

export type PlusProps = {
  plus: {
    fotografia: {
      nome: string
      ano: anoProps
      cidade: cidadeProps
      foto: ImagemProps
    }[]
  }
}

export type PremioProps = {
  premios: {
    slug: string
    foto: ImagemProps
    nome: string
    descricao: string
    ano: anoProps
    posicao: string
  }[]
}

export type PublicacoesProps = {
  publicacaos: {
    nome: string
    slug: string
    url: string
    ano: anoProps
    projeto: {
      slug: string
    }
    veiculo: {
      nome: string
    }
    meio: string
    galeria: ImagemProps[]
    capa: ImagemProps
  }[]
}

export type HomeProps = {
  home: {
    arquitetura: ImagemProps
    ensaio: ImagemProps
  }
}
