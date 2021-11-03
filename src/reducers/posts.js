import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from '../actions'

const default_state = []

const PostReducer = (state = default_state, action) => {
  const {
    type, id, title, image, description,
  } = action

  switch (type) {
    case ADD_POST:
      return [
        ...state,
        {
          id,
          title,
          image,
          description,
        },
      ]
    case DELETE_POST:
      return state.filter(post => post.id !== id)
    case EDIT_POST:
      return state.map(post => {
        if (post.id === id) {
          return {
            ...post,
            title,
            image,
            description,
            editMode: !post.editMode,
          }
        }
        return post
      })
    default:
      return state
  }
}

export default PostReducer
