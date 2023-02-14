import React, { useState } from 'react'
import { Card, Text, Box, Input, Stack, Button, HStack, CardHeader, CardBody } from '@chakra-ui/react'
import { MinusIcon, EditIcon, TimeIcon } from '@chakra-ui/icons'
import './Todo.css'


const Todo = ({updateTodo, deleteTodo, checkComplete, todo, id}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [updatedTask, setUpdatedTask] = useState("");

    const toggleEditing = () => {
        setIsEditing(true);
    }

    const handleEditing = () => {
        setIsEditing(false);
        todo.task = updatedTask;
        setUpdatedTask('');
    }

    return (
        <Card display="flex" margin="25px" borderRadius={15} minW="220px" minH="180px" boxShadow='lg' rounded='md'>
            <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center"  margin="20px" borderBottom="1px solid grey" >
                {isEditing
                    ? <CardBody><Input type="text" id="updatedTask" name="updatedTask" value={updatedTask} onChange={(e) => setUpdatedTask(e.target.value)} /><Button size="sm" onClick={() => handleEditing(id)}>Save</Button></CardBody>
                    : 
                    <div>
                        <CardHeader>
                            <label htmlFor={id} className={todo.complete ? "active" : ""} checked={todo.complete} onChange={() => checkComplete(id)} ><input type="checkbox" id={id}/> {todo.task} </label>
                        </CardHeader>
                        <CardBody>
                            <HStack>
                                {todo.due && !todo.category ? <Text fontSize="sm" ><TimeIcon />{todo.due} </Text>: null }
                                {todo.category && !todo.due ? <Text fontSize="sm">{todo.category}</Text>: null }
                                {todo.due && todo.category ? <Text fontSize="sm"><TimeIcon /> {todo.due} / {todo.category}</Text>: null}
                            </HStack>
                        </CardBody>
                        <Stack display="flex" flexDirection="row" width="62px" justifyContent="center" >
                            <HStack spacing={2} >
                                <Button size="md" bg="none" onClick={toggleEditing} disabled={todo.complete} color="#333652"><EditIcon /> </Button>
                                <Button size="md" bg="none" alignSelf="flex-end" onClick={() => deleteTodo(todo.id)} color="#333652"><MinusIcon /></Button>
                            </HStack>
                        </Stack>
                    </div>
                }
            </Box>
        </Card>
    )
}

export default Todo;