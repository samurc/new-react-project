import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Div } from './styles'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>{title} | React APP</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {children}
      </Div>
    </Fragment>
  )
}
