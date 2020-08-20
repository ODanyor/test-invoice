import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useHandleValue } from 'shared/hooks/useHandleValue'
import { useStateValue } from 'shared/hooks/useStateValue'
import { storeUsername } from 'shared/utils/username'
import { Form } from 'shared/utils/styles'

import { is } from 'shared/utils/validation'
import axios from 'axios'
import url from 'shared/constants/urls'

function LoginForm() {
  const inputRef = useRef()
  const history = useHistory()
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue()

  const username = useHandleValue('')
  const password = useHandleValue('')

  const submitHandle = (event) => {
    event.preventDefault()

    if (is.PASSWORD(password.controls.value)) {
      axios
        .get(url.githubCredentials(username.controls.value))
        .then((data) => {
          storeUsername(data.data.login)
          dispatch({ type: 'SET_USER', payload: data.data })
          history.push('/')
        })
        .catch(() => alert('Ошибка: Пользователь не найден'))
    } else {
      alert(
        'Ошибка: Пароль должен быть не менее 8 символов и должен содержать минимум 1 номер и 1 латинскую букву'
      )
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])

  return (
    <Form onSubmit={submitHandle}>
      <input
        type='text'
        name='username'
        placeholder='Имя'
        ref={inputRef}
        required={true}
        {...username.controls}
      />
      <input
        type='password'
        name='password'
        placeholder='Пароль'
        required={true}
        {...password.controls}
      />
      <button>Login</button>
    </Form>
  )
}

export default function LoginPage() {
  return (
    <div>
      <h1>Страница авторизации</h1>
      <LoginForm />
    </div>
  )
}
