/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable arrow-body-style */
import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from '../assets/icons/icon_arrow01.svg'
import { ReactComponent as AttachmentIcon } from '../assets/icons/icon_clip.svg'
import formatDate from '../utils/formatDate'

const MobileEmailList = ({
  emailList, getSortColStyle, getSortArrowStyle, handleSortKeyChange,
}) => {
  const history = useHistory()
  return (
    <div className="MobileEmailList-root MobileDisplay">
      <h1>Mobile View!</h1>
    </div>
  )
}

MobileEmailList.propTypes = {
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
  getSortColStyle: PropTypes.func.isRequired,
  getSortArrowStyle: PropTypes.func.isRequired,
  handleSortKeyChange: PropTypes.func.isRequired,
}

export default MobileEmailList
