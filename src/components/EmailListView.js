/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ReactComponent as AttachmentIcon } from '../assets/icons/icon_clip.svg'
import formatDate from '../utils/formatDate'
import SplashScreen from './SplashScreen'
// import { ReactComponent as ArrowIcon } from '../assets/icons/icon_arrow01.svg'

const EmailListView = ({ emailList, handleSortKeyChange }) => {
  const history = useHistory()

  if (emailList.length === 0) return <SplashScreen />

  return (
    <div className="EmailListView-root">
      <table className="EmailListView-table">
        <thead>
          <tr>
            <th
              className="from-col"
              onClick={() => handleSortKeyChange('from')}
            >
              From
            </th>
            <th
              className="to-col"
              onClick={() => handleSortKeyChange('to')}
            >
              To
            </th>
            <th
              className="subject-col"
              onClick={() => handleSortKeyChange('subject')}
            >
              Subject
            </th>
            <th className="attachment-col" />
            <th
              className="date-col"
              onClick={() => handleSortKeyChange('date')}
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {emailList.map((email) => (
            <tr key={email.id} onClick={() => history.push(`/email/${email.id}`)}>
              <td>{email.from}</td>
              <td>{email.to}</td>
              <td>{email.subject}</td>
              <td>{email.hasAttachment && <AttachmentIcon />}</td>
              <td>{formatDate(email.date)}</td>
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
  handleSortKeyChange: PropTypes.func.isRequired,
}

export default EmailListView
