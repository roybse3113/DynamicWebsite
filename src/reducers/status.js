import { SET_STATUS, STATUS } from '../actions'

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = STATUS
const default_state = SHOW_ALL

const statusReducer = (state = default_state, action) => {
  const { type, status } = action

  switch (type) {
    case SET_STATUS:
      return status
    default:
      return state
  }
}

export default statusReducer
