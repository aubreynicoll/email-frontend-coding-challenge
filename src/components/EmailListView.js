/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import PropTypes from 'prop-types'
import SplashScreen from './SplashScreen'
import DesktopEmailList from './DesktopEmailList'
import MobileEmailList from './MobileEmailList'

const EmailListView = ({ emailList, sortKey, handleSortKeyChange }) => {
  const getSortArrowStyle = (col) => {
    if (col === sortKey.key) {
      return {
        display: '',
        transform: `rotate(${sortKey.isAscending ? 0 : 180}deg)`,
      }
    }
    return { display: 'none' }
  }

  const getSortColStyle = (col) => {
    if (col === sortKey.key) {
      return {
        color: 'rgb(51,51,51)',
        fontWeight: 'bold',
      }
    }
    return {}
  }

  if (emailList.length === 0) return <SplashScreen />
  return (
    <div>
      <DesktopEmailList
        emailList={emailList}
        getSortColStyle={getSortColStyle}
        getSortArrowStyle={getSortArrowStyle}
        handleSortKeyChange={handleSortKeyChange}
      />
      <MobileEmailList
        emailList={emailList}
        getSortColStyle={getSortColStyle}
        getSortArrowStyle={getSortArrowStyle}
        handleSortKeyChange={handleSortKeyChange}
      />
    </div>
  )
}

EmailListView.propTypes = {
  emailList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      hasAttachment: PropTypes.bool.isRequired,
      subject: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
  sortKey: PropTypes.shape({
    key: PropTypes.string.isRequired,
    isAscending: PropTypes.bool.isRequired,
  }).isRequired,
  handleSortKeyChange: PropTypes.func.isRequired,
}

export default EmailListView
