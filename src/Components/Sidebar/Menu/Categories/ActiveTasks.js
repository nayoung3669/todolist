import React from 'react'
import Todo from '../../../Todos/Todo'

const ActiveTasks = ({todos, menu}) => {

  console.log("menu----")
  console.log(menu);

  return (
    <div>
      <ul>
        {todos.map ((todo) => {
            return (
            <li>
                <Todo 
                    todo={todo}
                />
            </li>)
        })}
    </ul>
    </div>
  )
}


export default ActiveTasks