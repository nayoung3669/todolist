import { Checkbox } from '@chakra-ui/react'
import React from 'react'

const Todo = ({todo}) => {
    console.log(todo)


  return (
    <div>
        <Checkbox colorScheme='yellow' ></Checkbox>
        {todo.task}
    </div>
  )
}

export default Todo