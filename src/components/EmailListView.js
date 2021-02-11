import React from 'react'
import { useHistory } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types'
import attachmentIcon from '../assets/icons/icon_clip.svg'

const EmailListView = ({ emailList }) => {
  const history = useHistory()

  return (
    <div className="EmailListView-root">
      <Table className="EmailListView-table" striped bordered hover>
        <thead>
          <tr>
            <th className="from-col">From:</th>
            <th className="to-col">To:</th>
            <th className="subject-col">Subject:</th>
            <th className="date-col">Date:</th>
          </tr>
        </thead>
        <tbody>
          {emailList.map((email) => (
            <tr key={email.id} onClick={() => history.push(`/email/${email.id}`)}>
              <td>{email.from}</td>
              <td>{email.to}</td>
              <td>
                <span>{email.subject}</span>
                <span>{email.hasAttachment && <img src={attachmentIcon} alt="" width="16" />}</span>
              </td>
              <td>{email.date.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

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
