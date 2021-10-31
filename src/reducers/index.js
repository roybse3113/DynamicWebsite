import { combineReducers } from 'redux'

import todos from './todos'
import status from './status'
import posts from './posts'
import introInfo from './introInfo'

export default combineReducers({
  todos,
  status,
  posts,
  introInfo,
})
