/* eslint-disable arrow-body-style */
import React from 'react'
import PropTypes from 'prop-types'
import searchIcon from '../assets/icons/icon_search.svg'

const DateRangeForm = ({ handleDateRangeChange }) => {
  const onSubmit = (event) => {
    event.preventDefault()
    const inputSplit = event.target.dateRange.value.split(' ')
    const date1 = new Date(inputSplit[0])
    const date2 = new Date(inputSplit[2])
    handleDateRangeChange([date1, date2])
  }

  return (
    <div className="DateRangeForm-root">
      <form onSubmit={onSubmit}>
        <div className="DateRangeForm-flex-container">
          <input
            type="text"
            className="DateRangeForm-input"
            id="dateRange"
            pattern="\d{4}/(0?[1-9]|1[012])/(0?[1-9]|[12][0-9]|3[01])\s+-\s+\d{4}/(0?[1-9]|1[012])/(0?[1-9]|[12][0-9]|3[01])"
            placeholder="YYYY/MM/DD - YYYY/MM/DD"
          />
          <input
            type="image"
            className="DateRangeForm-submit"
            src={searchIcon}
            alt=""
            width="20"
          />
        </div>
      </form>
    </div>
  )
}

DateRangeForm.propTypes = {
  handleDateRangeChange: PropTypes.func.isRequired,
}

export default DateRangeForm
