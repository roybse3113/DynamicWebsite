import React from 'react'
import Title from './components/Title'
import Footer from './components/Footer'
import ToDoList from './components/ToDoList'
import Input from './components/Input'
import Post from './components/Post'
import PostList from './components/PostList'
import PostAddForm from './components/PostAddForm'
import Intro from './components/Intro'
import IntroDisplay from './components/IntroDisplay'
import Blog from './components/Blog'
import './styles/app.css'

const App = () => (
  <div>
    <div className='intro'>
      <Intro />
    </div>
    <Blog />
  </div>
)
export default App
