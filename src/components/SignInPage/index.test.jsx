/* eslint-disable jest/expect-expect */
import React from 'react'

import { render, screen } from '../../tests/test-utils'
import SignInPage from './index'

test('Signin page renders', () => {
  render(<SignInPage />)
  screen.debug()
})
