import React, { useState, useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'

export const LoginContainer = () => {
  const { activateAuth } = useContext(Context)
  const baseURL = `//api.login.miurl`
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Handles user login
  const login = async (item) => {
    const response = await window.fetch(`${baseURL}/session/login`, {
      credentials: 'include',
      method: 'POST',
      headers: new window.Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }),
      body: JSON.stringify(item)
    })
    const data = await response.json()
    return data
  }

  const onSubmit = async ({ username, password }) => {
    const variables = { username, password }
    setLoading(true)
    const data = await login(variables)
    setLoading(false)
    if (data.status) {
      const { response } = data
      activateAuth(response.id)
    } else {
      setError('La contraseña no es correcta o el usuario no existe')
    }
  }
  return <UserForm disabled={loading} error={error} title='Iniciar sesión' onSubmit={onSubmit} />
}
