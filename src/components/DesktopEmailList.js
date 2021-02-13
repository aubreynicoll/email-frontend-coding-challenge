/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable arrow-body-style */
import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from '../assets/icons/icon_arrow01.svg'
import { ReactComponent as AttachmentIcon } from '../assets/icons/icon_clip.svg'
import formatDate from '../utils/formatDate'

const DesktopEmailList = ({
  emailList, getSortColStyle, getSortArrowStyle, handleSortKeyChange,
}) => {
  const history = useHistory()
  return (
    <div className="DesktopEmailList-root DesktopDisplay">
      <table className="DesktopEmailList-table">
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

DesktopEmailList.propTypes = {
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
  getSortColStyle: PropTypes.func.isRequired,
  getSortArrowStyle: PropTypes.func.isRequired,
  handleSortKeyChange: PropTypes.func.isRequired,
}

export default DesktopEmailList
