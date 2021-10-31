import React from 'react'
import { connect } from 'react-redux'
import { completeToDo, STATUS } from '../actions'
import Post from './Post'

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = STATUS

const filterTodos = (filter, todos) => {
  switch (filter) {
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}

const PostList = ({ posts }) => (
  <div>
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
