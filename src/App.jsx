import { useState } from 'react'
import './App.scss'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <div className='todo__container'>
      <TodoList />
    </div>
  )
}

export default App
