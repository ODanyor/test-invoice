import React from 'react'
import { Links, StyledLink } from './styles'

export default function index({ user }) {
  return (
    user && (
      <Links>
        <StyledLink to='/'>Терминалы</StyledLink>
        <StyledLink to='/buyers'>Покупатели</StyledLink>
      </Links>
    )
  )
}
