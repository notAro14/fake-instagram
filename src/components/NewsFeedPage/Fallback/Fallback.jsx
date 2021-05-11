/* eslint-disable react/prop-types */
import React from 'react'

import { Box, Button } from '../../common'

const Fallback = ({ resetErrorBoundary, error }) => {
  const reset = () => resetErrorBoundary()
  return (
    <Box role='alert'>
      <p style={{ textAlign: 'center', marginBottom: '15px' }}>
        😱 Something bad happened !
      </p>
      <p style={{ color: 'red', margin: '10px 0', textAlign: 'center' }}>
        {error.message}
      </p>
      <Button type='button' onClick={reset}>
        Reload
      </Button>
    </Box>
  )
}

export default Fallback
