import React from 'react'
import { Link } from 'react-router-dom'
import { Portal, Text } from './styles'
import john from 'shared/assets/john.gif'

export default function index() {
  return (
    <Portal>
      <img alt='404' src={john} width='100%' height='auto' />
      <Text>
        Ошибка 404. Вернуться <Link to='/'>домой</Link>
      </Text>
    </Portal>
  )
}
