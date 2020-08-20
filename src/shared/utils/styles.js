import styled from 'styled-components'

// Style variables
export const color = {
  champagne: '#F2E7C9',
  spring: '#E7EFC5',
  green: '#BFD7B5',
  opal: '#A3C4BC',
  violet: '#413C58',
  blue: '#09f',
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
      border: none;
      background: none;
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
    padding: 10px 6px;
    button {
      cursor: pointer;
      padding: 0.5rem;
      color: red;
    }
  }
`

export const Form = styled.form`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  height: 50px;

  input {
    width: 100%;
    border: none;
    padding: 5px 10px;
    border: 1px solid ${color.blue};
    ${font.size(19)};
    &:hover {
      border-color: #0099ff;
    }
  }

  button {
    cursor: pointer;
    border: none;
    padding: 5px;
    background-color: ${color.blue};
    color: #fff;
    ${font.size(17)};
    ${font.weight(600)};

    &:hover {
      filter: brightness(1.1);
    }
    &:active {
      filter: brightness(0.9);
    }
  }
`
