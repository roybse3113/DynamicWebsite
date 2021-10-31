import { ADD_TO_DO, COMPLETE_TO_DO } from '../actions'

const default_state = []

const ToDoReducer = (state = default_state, action) => {
  const { type, id, todo, completed } = action

  switch (type) {
    case ADD_TO_DO:
      return [...state, { id, todo, completed }]
    case COMPLETE_TO_DO:
      return state.map(curr => {
        if (curr.id === id) {
          return { ...curr, completed: !curr.completed }
        }
        return curr
      })
    default:
      return state
  }
}

export default ToDoReducer
