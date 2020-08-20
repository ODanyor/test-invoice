import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { color, font } from 'shared/utils/styles'

export const Links = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${color.champagne};
  margin: 1rem 0;
  ${font.size(22)};
  &:hover {
    filter: brightness(0.7);
  }
  &:active {
    filter: brightness(1.3);
  }
`
