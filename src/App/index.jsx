import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import Auth from 'Auth'

import { Layout } from 'shared/containers'

export default function index() {
  return (
    <Router>
      <Auth />
      <Layout>
        <Routes />
      </Layout>
    </Router>
  )
}
