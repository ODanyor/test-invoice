import React from 'react'
import { Avatar } from './styles'
import { useLoadingImage } from 'shared/hooks/useLoadingImage'

export default function Index({ imgUrl }) {
  return (
    <Avatar>
      <img
        alt='avatar'
        src={useLoadingImage(imgUrl)}
        width='100%'
        height='auto'
      />
    </Avatar>
  )
}
