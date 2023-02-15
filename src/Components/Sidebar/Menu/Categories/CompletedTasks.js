import React, { useContext } from 'react'
import Todo from '../../../Todos/Todo'
import "../../../Todos/Todo.css"
import { DataContext } from '../../../Todos/DataProvider'


const CompletedTasks = () => {
  const [todos] = useContext(DataContext);

  const completed = todos.filter((todo) => todo.complete === true);
  console.log("comp=-------")
  console.log(completed)

  return (
    <div className='completedTasks'>
      <ul>
        {completed.map ((todo) => {
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


export default CompletedTasks

