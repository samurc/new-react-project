import React, { Suspense, useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'

import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

export const App = () => {
  const { isAuth = false } = useContext(Context)
  console.log(isAuth)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Router>
        <NotFound default />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        <Home path='/' />
      </Router>
    </Suspense>
  )
}
