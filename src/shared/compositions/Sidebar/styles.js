import styled from 'styled-components'
import { color } from 'shared/utils/styles'

export const Sidebar = styled.div`
  position: relative;
  padding: 1rem;
  width: 300px;
  height: 100vh;
  background-color: ${color.violet};

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`
