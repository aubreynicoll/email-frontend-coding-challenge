import React from 'react'
import PropTypes from 'prop-types'
import DateRangeForm from './DateRangeForm'

const Header = ({
  // eslint-disable-next-line no-unused-vars
  nResults, handleDateRangeChange,
}) => (
  <header className="Header-root">
    <DateRangeForm handleDateRangeChange={handleDateRangeChange} />
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
  handleDateRangeChange: PropTypes.func.isRequired,
}

export default Header
