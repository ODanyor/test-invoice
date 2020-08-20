import React from 'react'
import { Sidebar } from './styles'

export default function index({ top, center, bottom }) {
  return (
    <Sidebar>
      <div>{top}</div>
      <div>{center}</div>
      <footer>{bottom}</footer>
    </Sidebar>
  )
}
