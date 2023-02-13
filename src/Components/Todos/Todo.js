import React, { useState } from 'react'
import { Card, Text, Heading, Box, Input, Stack, HStack, CardHeader, CardBody, Checkbox, EditableTextarea, Editable, EditablePreview  } from '@chakra-ui/react'
import { MinusIcon, EditIcon, CheckIcon, TimeIcon } from '@chakra-ui/icons'


const Todo = ({updateTodo, deleteTodo, todo}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [isInProgress, setIsDone] = useState(false);

    const toggleEditing = () => {
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }

    const toggleprogress = () => {
        
    }
    console.log(todo);

    return (
        <Card display="flex" margin="30px" borderRadius={15} minW="250px" minH="230px" boxShadow='lg' rounded='md'>
            <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center"  margin="20px" borderBottom="1px solid grey" >
                {isEditing? 
                    <Input name="editedText" id="editedText" onChange={e => updateTodo(todo.id, "task", e.target.value)}/> : 
                    <>
                        <CardHeader><Heading size="md" height="40px">{todo.task} </Heading></CardHeader>
                        <CardBody>
                                <Editable defaultValue='Description' color="gray">
                                    <EditablePreview />
                                    <EditableTextarea />
                                </Editable>
                                <HStack>
                                    {todo.due && !todo.category ? <Text fontSize="sm" ><TimeIcon />{todo.due} </Text>: null }
                                    {todo.category && !todo.due ? <Text fontSize="sm">{todo.category}</Text>: null }
                                    {todo.due && todo.category ? <Text fontSize="sm"><TimeIcon /> {todo.due} / {todo.category}</Text>: null}
                                </HStack>
                        </CardBody>
                        
                    </>
                }
                <Stack display="flex" flexDirection="row" width="62px" justifyContent="center" >
                    {isEditing? 
                        <CheckIcon onClick={toggleEditing}/>: 
                        <HStack spacing={7} marginBottom="20px" >
                            <Checkbox colorScheme="gray"/>
                            <EditIcon onClick={toggleEditing} boxSize={5} color="#333652"/> 
                            <MinusIcon alignSelf="flex-end" onClick={() => deleteTodo(todo.id)}  boxSize={5} color="#333652"/>
                        </HStack>
                    }
                </Stack>
            </Box>
        </Card>
    )
}

export default Todo;