import React from 'react'
// import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types'

const EmailListView = ({ emailList }) => (
  <div>
    <div>
      Results:
      {' '}
      {emailList.length}
      {' '}
      mail(s)
    </div>
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th>From:</th>
          <th>To:</th>
          <th>Subject:</th>
          <th>Date:</th>
        </tr>
      </thead>
      <tbody>
        {emailList.map((email) => (
          <tr key={email.id}>
            <td>{email.from}</td>
            <td>{email.to}</td>
            <td>{email.subject}</td>
            <td>{email.date.toDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
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
