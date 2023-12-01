import { useState } from 'react'
import './App.scss'
import TodoForm from './components/TodoForm/TodoForm'

function App() {
  return (
    <div className='todo__container'>
      <TodoForm/>
    </div>
  )
}

export default App
