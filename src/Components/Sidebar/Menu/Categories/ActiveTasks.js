import React, { useContext } from 'react'
import Todo from '../../../Todos/Todo'
import "../../../Todos/Todo.css"
import { DataContext } from '../../../../Context/DataProvider'

const ActiveTasks = () => {

  const {todos} = useContext(DataContext);

  const active = todos.filter((todo) => todo.complete !== true);

  console.log(active);
  return (
    <div>
      <ul>
        {active.map ((todo, index) => {
            return (
            <li>
                <Todo 
                    todo={todo}
                    key={index}
                    id={index}
                />
            </li>)
        })}
    </ul>
    </div>
  )
}


export default ActiveTasks