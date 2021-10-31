import React, { useState } from 'react'
import { connect } from 'react-redux'
import Input from './Input'

import { addIntro } from '../actions'

const IntroForm = ({
  dispatchAddIntro,
  id,
  description,
  image,
  setEdit,
  editMode,
}) => {
  const [currImage, setImage] = useState(image)
  const [currDescription, setDescription] = useState(description)

  return (
    <div>
      <h3>Image</h3>
      <input value={currImage} onChange={e => setImage(e.target.value)} />
      <h3>Description</h3>
      <input
        value={currDescription}
        onChange={e => setDescription(e.target.value)}
      />
      <p> </p>
      <button
        type='button'
        onClick={() => {
          dispatchAddIntro(currImage, currDescription)
          setEdit(!editMode)
        }}
      >
        Save
      </button>
      <button type='button' onClick={() => setEdit(!editMode)}>
        Cancel
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddIntro: (image, description) =>
    dispatch(addIntro(image, description)),
})

export default connect(null, mapDispatchToProps)(IntroForm)
