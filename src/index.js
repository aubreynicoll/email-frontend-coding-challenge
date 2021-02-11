import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import LuxonUtils from '@date-io/luxon'
import App from './App'

ReactDOM.render(
  <Router>
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </Router>,
  document.getElementById('root'),
)
