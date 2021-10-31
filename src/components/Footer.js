import React from 'react'
import { connect } from 'react-redux'

import { setStatus, STATUS } from '../actions'

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = STATUS

const Footer = ({ dispatchSetStatus }) => (
  <div>
    <div onClick={() => dispatchSetStatus(SHOW_ALL)}>all</div>
    <div onClick={() => dispatchSetStatus(SHOW_ACTIVE)}>copmleted</div>
    <div onClick={() => dispatchSetStatus(SHOW_COMPLETED)}>incomplete</div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  dispatchSetStatus: status => dispatch(setStatus(status)),
})

export default connect(null, mapDispatchToProps)(Footer)
