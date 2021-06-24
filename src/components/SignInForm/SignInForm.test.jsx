import React from 'react'
import userEvent from '@testing-library/user-event'

import SignInForm from './SignInForm'
import { render, screen, waitFor } from '../../tests/test-utils'

test('SignInForm submits email and password', async () => {
  const handleSubmit = jest.fn()
  const mockEmail = 'john.doe@gmail.com'
  const mockPassword = 'johnDoe21!'

  render(<SignInForm onSubmit={handleSubmit} />)

  userEvent.type(screen.getByLabelText(/email/i), mockEmail)
  userEvent.type(screen.getByLabelText(/password/i), mockPassword)

  userEvent.click(screen.getByRole('button', { name: /sign in/i }))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: mockEmail,
      password: mockPassword,
    })
  )
})
