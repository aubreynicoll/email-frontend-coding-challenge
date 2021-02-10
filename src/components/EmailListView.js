/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

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

export default EmailListView
