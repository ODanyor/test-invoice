import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getUsername, removeUsername } from 'shared/utils/username'
import { useStateValue } from 'shared/hooks/useStateValue'

import axios from 'axios'
import url from 'shared/constants/urls'

export default function Index() {
  const history = useHistory()
  const username = getUsername()
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue()

  useEffect(() => {
    if (!username) {
      return history.push('/login')
    }

    axios
      .get(url.githubCredentials(username))
      .then((data) => {
        dispatch({ type: 'SET_USER', payload: data.data })
      })
      .catch(() => {
        removeUsername()
        history.push('/login')
      })

    // eslint-disable-next-line
  }, [username])

  return null
}
