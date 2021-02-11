import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ nResults }) => (
  <header className="Header-root">
    <h2>Header</h2>
    <div>
      Results:
      {' '}
      {nResults}
      {' '}
      mail(s)
    </div>
  </header>
)

Header.propTypes = {
  nResults: PropTypes.number.isRequired,
}

export default Header
