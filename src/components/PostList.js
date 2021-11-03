import React from 'react'
import { connect } from 'react-redux'
import { completeToDo, STATUS } from '../actions'
import Post from './Post'
import '../styles/post.css'

const PostList = ({ posts }) => (
  <div className="postList">
    {posts.map(post => (
      <div key={post.id}>
        <Post
          id={post.id}
          title={post.title}
          image={post.image}
          description={post.description}
        />
      </div>
    ))}
  </div>
)

const mapDispatchToProps = dispatch => ({
  dispatchCompleteToDo: id => dispatch(completeToDo(id)),
})

const mapStateToProps = state => ({
  todos: state.todos,
  status: state.status,
  posts: state.posts,
})
export default connect(mapStateToProps, mapDispatchToProps)(PostList)
