import React from 'react'
import PropTypes from 'prop-types'

const EmailDetailView = ({ email }) => (
  <div>
    <h2>{email.subject}</h2>
    <div>
      {email.date.toString()}
    </div>
    <p>
      {email.body}
    </p>
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
