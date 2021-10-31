import React from 'react'
import { connect } from 'react-redux'
import { completeToDo, STATUS } from '../actions'

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

const ToDoList = ({ todos, status, dispatchCompleteToDo }) => (
  <div>
    {filterTodos(status, todos).map(todo => (
      <div
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        key={todo.id}
        onClick={() => dispatchCompleteToDo(todo.id)}
      >
        {todo.todo}
      </div>
    ))}
  </div>
)

const mapDispatchToProps = dispatch => ({
  dispatchCompleteToDo: id => dispatch(completeToDo(id)),
})

const mapStateToProps = state => ({
  todos: state.todos,
  status: state.status,
})
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
