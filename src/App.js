import React, { useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import {
  Header, Footer, EmailListView, EmailDetailView,
} from './components'
import emailData from './emails.json'

const App = () => {
  const [emailList, setEmailList] = useState([])

  useEffect(() => {
    const emails = emailData.map((email) => ({ ...email, date: new Date(email.date) }))
    setEmailList(emails)
  }, [])

  const emailRouteMatch = useRouteMatch('/email/:id')

  const emailMatch = emailRouteMatch
    ? emailList.find((email) => email.id === emailRouteMatch.params.id)
    : null

  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/email/:id">
            <EmailDetailView email={emailMatch} />
          </Route>
          <Route path="/">
            <EmailListView emailList={emailList} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
