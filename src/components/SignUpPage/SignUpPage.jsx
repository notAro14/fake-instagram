import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useUser } from 'Context/user.context'
import { CatchPhrase, Title, PrimaryLink, Box, Spinner } from '../common'
import SignUpForm from '../SignUpForm'
import notify from '../../helpers/notification'
import { signup } from '../../api/user'
import { LOADING, IDLE } from '../../constants'

const SignUpPage = () => {
  const history = useHistory()
  const { setAuthState } = useUser()

  const [state, setState] = useState(IDLE)

  const onSubmit = async ({ email, password, username, displayname }) => {
    setState(LOADING)
    signup({ email, password, username, displayname }).then(
      (user) => {
        setState(IDLE)
        setAuthState(user)
        history.push('/')
        notify.success(`Welcome ${user.userInfo.displayname.split(' ')[0]}`)
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
        <CatchPhrase>
          Sign up to see your friend&apos;s photos and videos.
        </CatchPhrase>
        <SignUpForm onSubmit={onSubmit} />
        {state.label === LOADING && <Spinner />}
      </Box>
      <Box>
        <p>
          Already have an account ?{' '}
          <PrimaryLink to='signin'>Sign in</PrimaryLink>
        </p>
      </Box>
    </>
  )
}

export default SignUpPage
