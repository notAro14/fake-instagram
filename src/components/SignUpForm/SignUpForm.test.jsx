import React from 'react'
import userEvent from '@testing-library/user-event'

import SignUpForm from './SignUpForm'
import { render, screen, waitFor } from '../../tests/test-utils'

test('SignInForm submits email and password', async () => {
  const handleSubmit = jest.fn()
  const mockEmail = 'john.doe@gmail.com'
  const mockPassword = 'johnDoe21!'
  const mockUsername = 'john-doe'
  const mockDisplayName = 'John Doe'

  render(<SignUpForm onSubmit={handleSubmit} />)

  userEvent.type(screen.getByLabelText(/email/i), mockEmail)
  userEvent.type(screen.getByLabelText(/username/i), mockUsername)
  userEvent.type(screen.getByLabelText(/full name/i), mockDisplayName)
  userEvent.type(screen.getByLabelText(/password/i), mockPassword)

  userEvent.click(screen.getByRole('button', { name: /next/i }))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith(
      {
        email: mockEmail,
        password: mockPassword,
        displayname: mockDisplayName,
        username: mockUsername,
      },
      expect.anything()
    )
  )
})
