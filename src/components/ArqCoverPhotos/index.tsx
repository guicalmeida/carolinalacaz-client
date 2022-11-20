/* eslint-disable react/display-name */
import React from 'react'
import { ProjetosProps } from 'types/api'
import * as S from './styles'

const getRandomNumber = () => {
  return Math.random()
}

export const ArqInitialPhoto = React.memo(({ projetos }: ProjetosProps) => {
  const fotosDestaque: string[] = []

  projetos.forEach((projeto) => {
    projeto.destaque ? fotosDestaque.push(projeto.capa.url) : null
  })

  const randomize = () => {
    return Math.floor(getRandomNumber() * fotosDestaque.length)
  }

  return <S.Image src={fotosDestaque[randomize()]} />
})
