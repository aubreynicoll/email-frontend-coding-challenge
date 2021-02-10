import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header, Footer, EmailListView } from './components'

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/">
        <EmailListView />
      </Route>
    </Switch>
    <Footer />
  </div>
)

export default App
