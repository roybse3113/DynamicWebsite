import React, { useState } from 'react'
import { connect } from 'react-redux'
import Input from './Input'
import IntroForm from './IntroForm'
import '../styles/post.css'

import { addIntro } from '../actions'
import IntroDisplay from './IntroDisplay'

const Intro = ({ introInfo, id, dispatchAddIntro }) => {
  const [editMode, setEdit] = useState(false)
  const { image, description } = introInfo

  return (
    <div>
      <h1>Hey This is Me!</h1>
      {!editMode ? (
        <div>
          {image}
          <p> </p>
          {description}
          <p> </p>
          <button type='button' onClick={() => setEdit(!editMode)}>
            Edit
          </button>
        </div>
      ) : (
        <div>
          <IntroForm
            id={id}
            image={image}
            description={description}
            editMode={editMode}
            setEdit={setEdit}
          />
        </div>
      )}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddIntro: (image, description) =>
    dispatch(addIntro(image, description)),
})
const mapStateToProps = state => ({
  introInfo: state.introInfo,
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
