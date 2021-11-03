import React from 'react'
import PostAddForm from './PostAddForm'
import PostList from './PostList'
import '../styles/blog.css'

const Blog = () => (
  <div className="blog">
    <div>
      <h1>Blog Posts</h1>
    </div>
    <div>
      <PostAddForm />
    </div>
    <div>
      <PostList />
    </div>
  </div>
)

export default Blog
