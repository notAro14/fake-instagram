/* eslint-disable react/prop-types, import/no-extraneous-dependencies */
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import { UserProvider } from '../context/user.context'

const AllTheProviders = ({ children, location = '/', context = {} }) => {
  return (
    <StaticRouter location={location} context={context}>
      <UserProvider>{children}</UserProvider>
    </StaticRouter>
  )
}

const customRender = (ui, options, location, context) =>
  render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders location={location} context={context}>
        {children}
      </AllTheProviders>
    ),
    ...options,
  })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
