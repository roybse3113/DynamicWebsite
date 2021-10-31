import { v4 as uuidv4 } from 'uuid'

export const ADD_TO_DO = 'ADD_TO_DO'
export const SET_STATUS = 'SET_STATUS'
export const COMPLETE_TO_DO = 'COMPLETE_TO_DO'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_INTRO = 'ADD_INTRO'

export const addPost = (title, image, description) => ({
  type: ADD_POST,
  id: uuidv4(),
  title,
  image,
  description,
  editMode: false,
})

export const addIntro = (image, description) => ({
  type: ADD_INTRO,
  image,
  description,
})

export const editPost = (id, title, image, description) => ({
  type: EDIT_POST,
  id,
  title,
  image,
  description,
})

export const deletePost = id => ({
  type: DELETE_POST,
  id,
})

export const addToDo = input => ({
  type: ADD_TO_DO,
  id: uuidv4(),
  todo: input,
  completed: false,
})

export const completeToDo = id => ({
  type: COMPLETE_TO_DO,
  id,
})

export const STATUS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

export const setStatus = status => ({
  type: SET_STATUS,
  status,
})
