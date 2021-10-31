import React from 'react'
import { connect } from 'react-redux'
import { completeToDo, STATUS } from '../actions'
import Post from './Post'

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = STATUS

const filterTodos = (filter, todos) => {
  switch (filter) {
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}

const IntroDisplay = ({ introInfo }) => (
  <div>
    {introInfo.image} {introInfo.description}
  </div>
)

const mapDispatchToProps = dispatch => ({
  dispatchCompleteToDo: id => dispatch(completeToDo(id)),
})

const mapStateToProps = state => ({
  introInfo: state.introInfo,
})
export default connect(mapStateToProps, mapDispatchToProps)(IntroDisplay)
