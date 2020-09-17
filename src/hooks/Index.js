import React from 'react'
import Context from './components/Context'
import TodoList from './components/TodoList'
import Add from './components/Add'

function Hooks(props) {
  return(
    <Context>
      <Add></Add>
      <TodoList></TodoList>
    </Context>
  )
}

export default Hooks;
