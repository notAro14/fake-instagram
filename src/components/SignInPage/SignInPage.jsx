import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PrimaryLink, Title, Box, Spinner } from '../common'
import SignInForm from '../SignInForm'
import { LOADING, IDLE } from '../../constants'
import { useUser } from '../../context/user.context'
import { login } from '../../api/user'
import notify from '../../helpers/notification'

const SignInPage = () => {
  const [state, setState] = useState(IDLE)
  const { setAuthState } = useUser()
  const history = useHistory()

  const onSubmit = ({ email, password }) => {
    setState(LOADING)
    login({ email, password }).then(
      (user) => {
        setState(IDLE)
        setAuthState(user)
        history.push('/')
        notify.success(
          `Welcome back ${user.userInfo.displayname.split(' ')[0]} !`
        )
      },
      (error) => {
        notify.error(error.message)
        setState(IDLE)
      }
    )
  }
  return (
    <>
      <Box>
        <Title>Instagram</Title>
        <SignInForm onSubmit={onSubmit} />
        {state.label === LOADING && <Spinner />}
      </Box>
      <Box>
        <p>
          Don&apos;t have an account ?{' '}
          <PrimaryLink to='signup'>Sign up</PrimaryLink>
        </p>
      </Box>
    </>
  )
}

export default SignInPage
