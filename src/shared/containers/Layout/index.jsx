import React from 'react'
import { Layout, Content } from './styles'
import { useStateValue } from 'shared/hooks/useStateValue'

import { Sidebar } from 'shared/compositions'
import { Avatar, Links, Footer } from 'shared/components'

export default function Index({ children }) {
  const [{ user }] = useStateValue()

  return (
    <Layout>
      <Sidebar
        top={<Avatar imgUrl={user ? user.avatar_url : null} />}
        center={<Links user={user} />}
        bottom={<Footer />}
      />
      <Content>{children}</Content>
    </Layout>
  )
}
