import styled from 'styled-components'

// Style variables
export const color = {
  champagne: '#F2E7C9',
  spring: '#E7EFC5',
  green: '#BFD7B5',
  opal: '#A3C4BC',
  violet: '#413C58',
}

export const font = {
  size: (size) => `font-size: ${size}px`,
  weight: (weight) => `font-weight: ${weight}`,
}

// Styled components
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
      border: none;
      &:hover {
        filter: brightness(2);
      }
      &:active {
        filter: brightness(0.9);
      }
    }
  }
`

export const Form = styled.form`
  margin: 1rem 0;
  width: 100%;
  border: 1px solid ${color.violet};
  display: flex;
  box-shadow: 1px 2px 5px ${color.violet};

  input {
    width: 100%;
    border: none;
    padding: 5px;
  }

  button {
    cursor: pointer;
    background-color: ${color.green};
    border: none;
    padding: 5px;

    &:hover {
      filter: brightness(1.1);
    }
    &:active {
      filter: brightness(0.9);
    }
  }
`
