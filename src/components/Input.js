import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addToDo } from '../actions'

const Input = ({ dispatchAddToDo }) => {
  const [text, setText] = useState('')

  return (
    <div>
      <input onChange={e => setText(e.target.value)} />
      <button type='button' onClick={() => dispatchAddToDo(text)}>
        Add ToDo
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddToDo: input => dispatch(addToDo(input)),
})

export default connect(null, mapDispatchToProps)(Input)
