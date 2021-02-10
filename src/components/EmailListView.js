import React, { useState, useEffect } from 'react'
import emailData from '../emails.json'

const EmailListView = () => {
  const [emailList, setEmailList] = useState([])

  useEffect(() => {
    const emails = emailData.map((email) => ({ ...email, date: new Date(email.date) }))
    setEmailList(emails)
  }, [])

  return (
    <main>
      <h2>EmailListView</h2>
      <ul>
        {emailList.map((email) => (
          <li key={email.id}>
            {email.id}
            {' :: '}
            {email.date.toString()}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default EmailListView
