import React, { useState } from 'react'
import { connect } from 'react-redux'
import IntroForm from './IntroForm'
import '../styles/intro.css'

import { addIntro } from '../actions'

const Intro = ({ introInfo, id, dispatchAddIntro }) => {
  const [editMode, setEdit] = useState(false)
  const { image, description } = introInfo

  return (
    <div>
      <h1 className="introHeader">Hey This is Me!</h1>
      {!editMode ? (
        <div>
          <img className="introImage" src={image} alt={image} />
          <p className="introDescription"> </p>
          {description}
          <p> </p>
          <button
            className="editIntro"
            type="button"
            onClick={() => setEdit(!editMode)}
          >
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
  dispatchAddIntro: (image, description) => dispatch(addIntro(image, description)),
})
const mapStateToProps = state => ({
  introInfo: state.introInfo,
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
