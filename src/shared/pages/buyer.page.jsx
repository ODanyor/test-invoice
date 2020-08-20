import React from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from 'shared/hooks/useStateValue'
import { Table } from 'shared/utils/styles'

function Buyer({ item }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID покупателя</th>
          <th>Имя покупателя</th>
          <th>Средний чек</th>
          <th>Количество покупок</th>
          <th>Общая выручка</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{(item.totalPrice / item.purchases).toFixed(2)}</td>
          <td>{item.purchases}</td>
          <td>{item.totalPrice}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default function BuyerPage() {
  const [{ buyers }] = useStateValue()
  const { id } = useParams()
  const buyer = buyers.find((buyer) => buyer.id.toString() === id)

  return (
    <div>
      <h1>Покупатель: </h1>
      <Buyer item={buyer} />
    </div>
  )
}
