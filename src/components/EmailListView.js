import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const EmailListView = ({ emailList }) => (
  <div>
    <h2>EmailListView</h2>
    <ul>
      {emailList.map((email) => (
        <li key={email.id}>
          <Link to={`/email/${email.id}`}>
            {email.id}
            {' :: '}
            {email.date.toString()}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

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
}

export default EmailListView
