import React, { useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import {
  Header, Footer, EmailListView, EmailDetailView,
} from './components'
import emailData from './emails.json'
import { getSortAlgorithm } from './utils'

const App = () => {
  const [emailList, setEmailList] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [sortKey, setSortKey] = useState({ key: 'date', isAscending: false })

  const initializeDateRange = () => {
    const dates = emailData.map((email) => new Date(email.date))
    setStartDate(new Date(Math.min(...dates)))
    setEndDate(new Date(Math.max(...dates)))
  }

  useEffect(() => {
    const emails = emailData.map((email) => ({
      ...email,
      date: new Date(email.date),
    }))
    setEmailList(emails)

    initializeDateRange()
  }, [])

  const handleDateRangeChange = (value) => {
    if (!value) {
      initializeDateRange()
      return
    }
    const inputSplit = value.split(' ')
    const date1 = new Date(inputSplit[0])
    const date2 = new Date(inputSplit[2])
    date2.setDate(date2.getDate() + 1)
    setStartDate(date1)
    setEndDate(date2)
  }

  const handleSortKeyChange = (key) => {
    if (key === sortKey.key) {
      setSortKey({
        ...sortKey,
        isAscending: !sortKey.isAscending,
      })
    } else {
      setSortKey({
        key,
        isAscending: key !== 'date',
      })
    }
  }

  const emailRouteMatch = useRouteMatch('/email/:id')
  const emailMatch = emailRouteMatch
    ? emailList.find((email) => email.id === emailRouteMatch.params.id)
    : null

  const filteredEmails = emailList
    .filter((email) => (
      startDate <= email.date && email.date <= endDate
    ))
    .sort(getSortAlgorithm(sortKey))

  return (
    <div className="App-root">
      <Header
        nResults={filteredEmails.length}
        startDate={startDate}
        endDate={endDate}
        handleDateRangeChange={handleDateRangeChange}
      />
      <main>
        <Switch>
          <Route path="/email/:id">
            <EmailDetailView email={emailMatch} />
          </Route>
          <Route path="/">
            <EmailListView
              emailList={filteredEmails}
              sortKey={sortKey}
              handleSortKeyChange={handleSortKeyChange}
            />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
