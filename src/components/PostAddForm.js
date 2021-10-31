import React, { useState } from 'react'
import { connect } from 'react-redux'
import Input from './Input'

import { addPost } from '../actions'

const PostForm = ({ dispatchAddPost }) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [show, setShow] = useState(false)

  const clearInput = () => {
    setTitle('')
    setImage('')
    setDescription('')
  }

  const functions = e => {
    if (!title || !image || !description) {
      e.preventDefault()
    } else {
      dispatchAddPost(title, image, description)
      setShow(!show)
      clearInput()
    }
  }

  return (
    <div>
      {show ? (
        <div>
          <h3>Title</h3>
          <input onChange={e => setTitle(e.target.value)} />
          <h3>Image</h3>
          <input onChange={e => setImage(e.target.value)} />
          <h3>Description</h3>
          <input onChange={e => setDescription(e.target.value)} />
          <p> </p>
          <button
            type='button'
            onClick={e => {
              functions(e)
            }}
          >
            Save
          </button>
          <button type='button' onClick={() => setShow(!show)}>
            Cancel
          </button>
        </div>
      ) : (
        <button type='button' onClick={() => setShow(!show)}>
          Add Post
        </button>
      )}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, image, description) =>
    dispatch(addPost(title, image, description)),
})

export default connect(null, mapDispatchToProps)(PostForm)
