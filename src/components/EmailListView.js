/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ReactComponent as AttachmentIcon } from '../assets/icons/icon_clip.svg'
import formatDate from '../utils/formatDate'
import SplashScreen from './SplashScreen'
import { ReactComponent as ArrowIcon } from '../assets/icons/icon_arrow01.svg'

// eslint-disable-next-line no-unused-vars
const EmailListView = ({ emailList, sortKey, handleSortKeyChange }) => {
  const history = useHistory()

  // eslint-disable-next-line no-unused-vars
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
    <div className="EmailListView-root">
      <table className="EmailListView-table">
        <thead>
          <tr>
            <th
              className="from-col"
              style={getSortColStyle('from')}
              onClick={() => handleSortKeyChange('from')}
            >
              <div className="th-flex-container">
                <span>From</span>
                <ArrowIcon style={getSortArrowStyle('from')} />
              </div>
            </th>
            <th
              className="to-col"
              style={getSortColStyle('to')}
              onClick={() => handleSortKeyChange('to')}
            >
              <div className="th-flex-container">
                <span>To</span>
                <ArrowIcon style={getSortArrowStyle('to')} />
              </div>
            </th>
            <th
              className="subject-col"
              style={getSortColStyle('subject')}
              onClick={() => handleSortKeyChange('subject')}
            >
              <div className="th-flex-container">
                <span>Subject</span>
                <ArrowIcon style={getSortArrowStyle('subject')} />
              </div>
            </th>
            <th className="attachment-col" />
            <th
              className="date-col"
              style={getSortColStyle('date')}
              onClick={() => handleSortKeyChange('date')}
            >
              <div className="th-flex-container">
                <span>Date</span>
                <ArrowIcon style={getSortArrowStyle('date')} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {emailList.map((email) => (
            <tr key={email.id} onClick={() => history.push(`/email/${email.id}`)}>
              <td style={getSortColStyle('from')}>{email.from}</td>
              <td style={getSortColStyle('to')}>{email.to}</td>
              <td style={getSortColStyle('subject')}>{email.subject}</td>
              <td>{email.hasAttachment && <AttachmentIcon />}</td>
              <td style={getSortColStyle('date')}>{formatDate(email.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
