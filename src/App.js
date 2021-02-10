import React, { useState, useEffect } from 'react'
import emailData from './emails.json'

const App = () => {
  const [emailList, setEmailList] = useState([])

  useEffect(() => {
    const emails = emailData.map((email) => ({ ...email, date: new Date(email.date) }))
    setEmailList(emails)
  }, [])

  return (
    <div>
      <h1>Hello World!</h1>
      <ul>
        {emailList.map((email) => (
          <li key={email.id}>
            {email.id}
            {' '}
            {email.date.toString()}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
