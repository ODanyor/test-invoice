import React from 'react'
import { useHandleValue } from 'shared/hooks/useHandleValue'
import { useStateValue } from 'shared/hooks/useStateValue'
import { Table } from 'shared/components'

function Terminal({ terminal, dispatch }) {
  const removeTerminal = () =>
    dispatch({ type: 'REMOVE_TERMINAL', payload: terminal.id })

  return (
    <tr>
      <td>{terminal.name}</td>
      <td>{terminal.description}</td>
      <td>
        <button onClick={removeTerminal}>&#10005;</button>
      </td>
    </tr>
  )
}

function Terminals({ terminals, dispatch }) {
  return terminals.map((terminal, index) => (
    <Terminal key={index} terminal={terminal} dispatch={dispatch} />
  ))
}

function TerminalsTable(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Название</th>
          <th colSpan='2'>Описание</th>
        </tr>
      </thead>
      <tbody>
        <Terminals {...props} />
      </tbody>
    </Table>
  )
}

function TerminalForm({ dispatch }) {
  const name = useHandleValue('')
  const description = useHandleValue('')
  const id = Math.floor(Math.random() * 10000000)

  const submitHandle = (event) => {
    event.preventDefault()

    if (name.controls.value) {
      dispatch({
        type: 'ADD_TERMINAL',
        payload: {
          id,
          name: name.controls.value,
          description: description.controls.value,
        },
      })
      name.setValue('')
      description.setValue('')
    }
  }

  return (
    <form onSubmit={submitHandle}>
      <input
        type='text'
        name='name'
        placeholder='Название'
        {...name.controls}
      />
      <input
        type='text'
        name='description'
        placeholder='Описание'
        {...description.controls}
      />
      <button>Добавить</button>
    </form>
  )
}

export default function TerminalsPage() {
  const [{ terminals }, dispatch] = useStateValue()

  return (
    <div>
      <h1>Терминалы: </h1>
      <TerminalForm dispatch={dispatch} />
      <TerminalsTable terminals={terminals} dispatch={dispatch} />
    </div>
  )
}
