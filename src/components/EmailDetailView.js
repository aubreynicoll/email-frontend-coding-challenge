import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as MailIcon } from '../assets/icons/icon_mail_sp.svg'

const EmailDetailView = ({ email }) => (
  <div className="EmailDetailView-root">
    <hr />
    <h2>{email.subject}</h2>
    <div className="EmailDetailView-flex-row">
      <MailIcon />
      <div className="EmailDetailView-flex-col">
        <span>{email.from}</span>
        <span>{email.to}</span>
      </div>
    </div>
    <p>
      {email.date.toString()}
    </p>
    <p>
      {email.body}
    </p>
    <hr />
  </div>
)

EmailDetailView.propTypes = {
  email: PropTypes.shape({
    id: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    hasAttachment: PropTypes.bool.isRequired,
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
}

export default EmailDetailView
