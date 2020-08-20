import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from 'shared/hooks/useStateValue'
import { useHandleValue } from 'shared/hooks/useHandleValue'
import { Table } from 'shared/utils/styles'

function Buyer({ buyer }) {
  return (
    <tr>
      <td>
        <Link to={`/buyers/${buyer.id}`}>{buyer.id}</Link>
      </td>
      <td>{buyer.name}</td>
      <td>{(buyer.totalPrice / buyer.purchases).toFixed(2)}</td>
      <td>{buyer.purchases}</td>
      <td>{buyer.totalPrice}</td>
    </tr>
  )
}

function paginate(array, display, list) {
  return array.slice(0, display * list)
}

function Buyers({ buyers, dispatch, sortBy, reverse, display }) {
  const listNumber = useHandleValue(1)
  const slicedBuyers = paginate(buyers, display, listNumber.controls.value)

  const sortedBuyers =
    sortBy === 'name'
      ? slicedBuyers.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
      : sortBy === 'reciept'
      ? slicedBuyers.sort(
          (a, b) => b.totalPrice / b.purchases - a.totalPrice / a.purchases
        )
      : sortBy === 'purchases' || sortBy === 'purchases'
      ? slicedBuyers.sort((a, b) => b[sortBy] - a[sortBy])
      : slicedBuyers

  if (reverse) {
    slicedBuyers.reverse()
  }

  return (
    <React.Fragment>
      {sortedBuyers.map((buyer, index) => (
        <Buyer key={index} buyer={buyer} dispatch={dispatch} />
      ))}
      <tr>
        <td>
          <button
            onClick={() => listNumber.setValue(++listNumber.controls.value)}
          >
            Еще
          </button>
        </td>
      </tr>
    </React.Fragment>
  )
}

function TableHead({ display, toggle }) {
  return (
    <thead>
      <tr>
        <td>
          <select
            onChange={display.controls.onChange}
            value={display.controls.value}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>ID покупателя</th>
        <th>
          <button onClick={() => toggle('name')}>Имя покупателя</button>
        </th>
        <th>
          <button onClick={() => toggle('reciept')}>Средний чек</button>
        </th>
        <th>
          <button onClick={() => toggle('purchases')}>
            Количество покупок
          </button>
        </th>
        <th>
          <button onClick={() => toggle('totalPrice')}>Общая выручка</button>
        </th>
      </tr>
    </thead>
  )
}

function TableBody({ buyers, sortBy, reverse, display }) {
  return (
    <tbody>
      <Buyers
        buyers={buyers}
        sortBy={sortBy.controls.value}
        reverse={reverse.controls.value}
        display={display.controls.value}
      />
    </tbody>
  )
}

function BuyersTable() {
  const [{ buyers }] = useStateValue()

  const sortBy = useHandleValue('')
  const reverse = useHandleValue(false)
  const display = useHandleValue(5)

  const toggle = (column) => {
    sortBy.setValue(column)
    reverse.setValue(!reverse.controls.value)
  }

  return (
    <Table>
      <TableHead display={display} toggle={toggle} />
      <TableBody
        buyers={buyers}
        sortBy={sortBy}
        reverse={reverse}
        display={display}
      />
    </Table>
  )
}

export default function BuyersPage() {
  return (
    <div>
      <h1>Покупатели: </h1>
      <BuyersTable />
    </div>
  )
}
