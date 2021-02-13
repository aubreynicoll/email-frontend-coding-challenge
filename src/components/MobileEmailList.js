/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable arrow-body-style */
import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from '../assets/icons/icon_arrow01.svg'
import { ReactComponent as ArrowIcon02 } from '../assets/icons/icon_arrow02.svg'
import { ReactComponent as AttachmentIcon } from '../assets/icons/icon_clip.svg'
import formatDate from '../utils/formatDate'
import { ReactComponent as MailIcon } from '../assets/icons/icon_mail_sp.svg'

const MobileEmailList = ({
  emailList, getSortColStyle, getSortArrowStyle, handleSortKeyChange,
}) => {
  const history = useHistory()
  return (
    <div className="MobileEmailList-root MobileDisplay">
      <div className="MobileEmailList-sortBar">
        <div
          style={getSortColStyle('from')}
          onClick={() => handleSortKeyChange('from')}
        >
          <span>From</span>
          <ArrowIcon style={getSortArrowStyle('from')} />
        </div>
        {' | '}
        <div
          style={getSortColStyle('to')}
          onClick={() => handleSortKeyChange('to')}
        >
          <span>To</span>
          <ArrowIcon style={getSortArrowStyle('to')} />
        </div>
        {' | '}
        <div
          style={getSortColStyle('subject')}
          onClick={() => handleSortKeyChange('subject')}
        >
          <span>Subject</span>
          <ArrowIcon style={getSortArrowStyle('subject')} />
        </div>
        {' | '}
        <div
          style={getSortColStyle('date')}
          onClick={() => handleSortKeyChange('date')}
        >
          <span>Date</span>
          <ArrowIcon style={getSortArrowStyle('date')} />
        </div>
      </div>

      <div className="MobileEmailList-body">
        {emailList.map((email) => (
          <div key={email.id} className="ListCard-root" onClick={() => history.push(`/email/${email.id}`)}>
            <div className="MailIcon-row-container">

              <div className="MailIcon-div">
                <MailIcon width="16" />
              </div>

              <div className="EmailAddresses-col-container">
                <div className="EmailFrom-row-container">

                  <div className="EmailFrom-div text email" style={getSortColStyle('from')}>
                    {email.from}
                  </div>

                  <div className="Date-row-container">
                    <AttachmentIcon width="16" />
                    <div className="Date-div" style={getSortColStyle('date')}>
                      {formatDate(email.date)}
                    </div>
                    <ArrowIcon02 width="4" />
                  </div>

                </div>

                <div className="EmailTo-div text email" style={getSortColStyle('to')}>
                  {email.to}
                </div>
              </div>

            </div>

            <div className="EmailSubject-div text subject" style={getSortColStyle('subject')}>
              {email.subject}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

MobileEmailList.propTypes = {
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

export default MobileEmailList
