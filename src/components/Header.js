import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from '@material-ui/pickers'
import { ReactComponent as ArrowIcon } from '../assets/icons/icon_arrow02.svg'

const Header = ({
  nResults, startDate, endDate, handleStartDateChange, handleEndDateChange,
}) => (
  <header className="Header-root">
    <DatePicker
      value={startDate}
      onChange={handleStartDateChange}
      format="MM/dd/yyyy"
    />
    <ArrowIcon />
    <DatePicker
      value={endDate}
      onChange={handleEndDateChange}
      format="MM/dd/yyyy"
    />
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
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  handleStartDateChange: PropTypes.func.isRequired,
  handleEndDateChange: PropTypes.func.isRequired,
}

export default Header
