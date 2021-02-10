/* eslint-disable react/prop-types */
import React from 'react'

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

export default EmailDetailView
