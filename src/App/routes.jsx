import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  TerminalsPage,
  BuyersPage,
  BuyerPage,
  LoginPage,
  NotFound,
} from 'shared/pages'

export default function routes() {
  return (
    <Switch>
      <Route exact path='/' render={() => <TerminalsPage />} />
      <Route exact path='/buyers' render={() => <BuyersPage />} />
      <Route exact path='/buyers/:id' render={() => <BuyerPage />} />

      <Route exact path='/login' render={() => <LoginPage />} />
      <Route exact path='/*' render={() => <NotFound />} />
    </Switch>
  )
}
