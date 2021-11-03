import React from 'react'
import Intro from './components/Intro'
import Blog from './components/Blog'
import './styles/app.css'

const App = () => (
  <div>
    <div className="intro">
      <Intro />
    </div>
    <Blog />
  </div>
)
export default App
