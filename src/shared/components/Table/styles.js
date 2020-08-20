import styled from 'styled-components'
import { color, font } from 'shared/utils/styles'

export const Table = styled.table`
  width: 100%;
  margin: 1rem 0;

  th {
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
    background-color: ${color.champagne};

    button {
      cursor: pointer;
      background-color: ${color.spring};
      padding: 0.5rem 0;
      &:hover {
        filter: brightness(1.1);
      }
      &:active {
        filter: brightness(0.9);
      }
    }
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  td {
    button {
      cursor: pointer;
      padding: 0.5rem;
      color: #fff;
      background-color: red;
      &:hover {
        filter: brightness(2);
      }
      &:active {
        filter: brightness(0.9);
      }
    }
  }
`
