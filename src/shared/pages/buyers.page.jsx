import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from 'shared/hooks/useStateValue'
import { useHandleValue } from 'shared/hooks/useHandleValue'
import { Table } from 'shared/components'

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

  // TODO: optimze
  const sortedBuyers =
    sortBy === 'name'
      ? slicedBuyers.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
      : sortBy === 'reciept'
      ? slicedBuyers.sort(
          (a, b) => b.totalPrice / b.purchases - a.totalPrice / a.purchases
        )
      : slicedBuyers.sort((a, b) => b[sortBy] - a[sortBy])

  if (reverse) {
    console.log(slicedBuyers)
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

function BuyersTable(props) {
  const sortBy = useHandleValue('name')
  const reverse = useHandleValue(false)
  const display = useHandleValue(5)

  const toggle = (column) => {
    sortBy.setValue(column)
    reverse.setValue(!reverse.controls.value)
  }

  return (
    <Table>
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
      <tbody>
        <Buyers
          {...props}
          sortBy={sortBy.controls.value}
          reverse={reverse.controls.value}
          display={display.controls.value}
        />
      </tbody>
    </Table>
  )
}

export default function BuyersPage() {
  const [{ buyers }] = useStateValue()

  return (
    <div>
      <h1>Покупатели: </h1>
      <BuyersTable buyers={buyers} />
    </div>
  )
}
