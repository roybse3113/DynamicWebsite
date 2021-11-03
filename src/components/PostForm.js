import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../styles/post.css'

import { addPost, deletePost, editPost } from '../actions'

const PostForm = ({
  dispatchAddPost,
  dispatchEditPost,
  dispatchDeletePost,
  id,
  title,
  description,
  image,
  setEdit,
  editMode,
}) => {
  const [currTitle, setTitle] = useState(title)
  const [currImage, setImage] = useState(image)
  const [currDescription, setDescription] = useState(description)

  return (
    <div className="editForm">
      <h3>Title</h3>
      <input
        className="Title"
        value={currTitle}
        onChange={e => setTitle(e.target.value)}
      />
      <h3>Image</h3>
      <input
        className="Image"
        value={currImage}
        onChange={e => setImage(e.target.value)}
      />
      <h3>Description</h3>
      <input
        className="Description"
        value={currDescription}
        onChange={e => setDescription(e.target.value)}
      />
      <p> </p>
      <button
        type="button"
        className="save"
        onClick={() => {
          dispatchEditPost(id, currTitle, currImage, currDescription)
          setEdit(!editMode)
        }}
      >
        Save
      </button>
      <button
        className="Cancel"
        type="button"
        onClick={() => setEdit(!editMode)}
      >
        Cancel
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, image, description) => dispatch(addPost(title, image, description)),
  dispatchEditPost: (id, title, image, description) => dispatch(editPost(id, title, image, description)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

export default connect(null, mapDispatchToProps)(PostForm)
