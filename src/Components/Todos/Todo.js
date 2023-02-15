import React, { useState, useContext } from 'react'
import { Card, Text, Box, Input, Button, HStack, CardHeader, CardBody } from '@chakra-ui/react'
import { MinusIcon, EditIcon, TimeIcon } from '@chakra-ui/icons'
import './Todo.css'
import { DataContext } from '../../Context/DataProvider'


const Todo = ({todo, id}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [updatedTask, setUpdatedTask] = useState("");
    const {todos, setTodos, deleteTodos, switchComplete, handleEditedValue} = useContext(DataContext)

    const toggleEditing = () => {
        setIsEditing(true);
    }

    const handleEditing = id => {
        setIsEditing(false);
        if (updatedTask) {
            handleEditedValue(updatedTask, id)
        } else {
            setUpdatedTask(todo.task);
        }
        setUpdatedTask('');
    }

    return (
        <Card display="flex" margin="25px" borderRadius={15} minW="220px" minH="170px" boxShadow='xl' rounded='md'>
            <Box display="flex" flexDirection="column"  margin="7px" borderBottom="4px solid #FAD02C" >
                {isEditing
                    ? <CardBody><Input type="text" id="updatedTask" value={updatedTask} onChange={(e) => setUpdatedTask(e.target.value)} /><Button size="sm" onClick={() => handleEditing(id)}>Save</Button></CardBody>
                    : <div>
                        <CardHeader>
                            {todo.category? <Text fontSize="xs" >{todo.category}</Text>: null }
                            <br />
                            <label htmlFor={id} className={todo.complete ? "active" : ""}  ><input type="checkbox" id={id} checked={todo.complete} onChange={() => switchComplete(id)} /> {todo.task}</label>
                        </CardHeader>
                        <CardBody>
                            <HStack>
                                {todo.due ? <Text fontSize="xs" ><TimeIcon /> {todo.due} </Text>: null }
                            </HStack>
                        </CardBody>
                            <HStack display="flex" flexDirection="row" justifyContent="flex-end">
                                <Button size="md" bg="none" onClick={toggleEditing} disabled={todo.complete} color="#333652"><EditIcon /> </Button>
                                <Button size="md" bg="none" alignSelf="flex-end" onClick={() =>deleteTodos(id)} color="#333652"><MinusIcon /></Button>
                            </HStack>
                    </div>
                }
            </Box>
        </Card>
    )
}

export default Todo;