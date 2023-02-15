import React, { useContext } from 'react'
import Todo from '../../../Todos/Todo'
import "../../../Todos/Todo.css"
import { DataContext } from '../../../../Context/DataProvider'
import { Stack } from '@chakra-ui/react'


const CompletedTasks = () => {
  const {todos} = useContext(DataContext);


  const completed = todos.filter((todo) => todo.complete === true);

  return (
    <Stack className="cards" width="100%" bg="#E9EAEC" p="28px" border="2px solid #333652">
      <div className='completedTasks'>
        <ul>
          {completed.map ((todo, index) => {
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
    </Stack>
  )
}


export default CompletedTasks

