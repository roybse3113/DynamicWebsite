import { ADD_INTRO } from '../actions'

const default_state = {
  image: '',
  description: '',
}

const IntroReducer = (state = default_state, action) => {
  const { type, id, image, description } = action

  switch (type) {
    case ADD_INTRO:
      return { ...state, image, description }
    default:
      return state
  }
}

export default IntroReducer
