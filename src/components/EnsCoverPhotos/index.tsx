/* eslint-disable react/display-name */
import React from 'react'
import { EnsaiosProps } from 'types/api'
import * as S from './styles'

const getRandomNumber = () => {
  return Math.random()
}

export const EnsInitialPhoto = React.memo(({ ensaios }: EnsaiosProps) => {
  const fotosDestaque: string[] = []

  ensaios.forEach((ensaio) => {
    ensaio.destaque ? fotosDestaque.push(ensaio.capa.url) : null
  })

  return (
    <S.Image
      src={fotosDestaque[Math.floor(getRandomNumber() * fotosDestaque.length)]}
    />
  )
})
