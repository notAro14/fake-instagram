import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar'
import Layout from '../Layout'

const AppShell = ({ children }) => (
  <>
    <Navbar />
    <Layout>{children}</Layout>
  </>
)

AppShell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}

export default AppShell
