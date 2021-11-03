import React from 'react'
import { connect } from 'react-redux'
import { completeToDo, STATUS } from '../actions'

const IntroDisplay = ({ introInfo }) => (
  <div>
    {introInfo.image}
    {' '}
    {introInfo.description}
  </div>
)

const mapDispatchToProps = dispatch => ({
  dispatchCompleteToDo: id => dispatch(completeToDo(id)),
})

const mapStateToProps = state => ({
  introInfo: state.introInfo,
})
export default connect(mapStateToProps, mapDispatchToProps)(IntroDisplay)
