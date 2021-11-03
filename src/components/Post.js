import React, { useState } from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import '../styles/post.css'

import { addPost, editPost, deletePost } from '../actions'

const Post = ({
  title,
  image,
  description,
  id,
  dispatchAddPost,
  dispatchEditPost,
  dispatchDeletePost,
}) => {
  const [editMode, setEdit] = useState(false)

  return (
    <div className="post">
      {!editMode ? (
        <div>
          <h3 className="postTitle">{title}</h3>
          <h2>
            <img src={image} alt={image} />
          </h2>
          <p className="postDescription">{description}</p>
          <button
            className="edit"
            type="button"
            onClick={() => setEdit(!editMode)}
          >
            Edit Post
          </button>
          <div>
            <p className="postID">
              Post ID:
              {' '}
              {id}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <PostForm
            id={id}
            title={title}
            image={image}
            description={description}
            editMode={editMode}
            setEdit={setEdit}
          />
          <button
            className="delete"
            type="button"
            onClick={() => dispatchDeletePost(id)}
          >
            Delete Post
          </button>
        </div>
      )}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: (id, title, image, description) => dispatch(editPost(id, title, image, description)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

export default connect(null, mapDispatchToProps)(Post)
