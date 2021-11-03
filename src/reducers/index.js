import { combineReducers } from 'redux'
import posts from './posts'
import introInfo from './introInfo'

export default combineReducers({
  posts,
  introInfo,
})
