import React, { useState } from 'react'
import { Card, Text, Heading, Box, Input, Stack, Button, HStack, CardHeader, CardBody, Checkbox, EditableTextarea, Editable, EditablePreview  } from '@chakra-ui/react'
import { MinusIcon, EditIcon, CheckIcon, TimeIcon } from '@chakra-ui/icons'


const Todo = ({updateTodo, deleteTodo, toggleProgress, todo}) => {
    const [isEditing, setIsEditing] = useState(false)

    const toggleEditing = () => {
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }

    return (
        <Card display="flex" margin="30px" borderRadius={15} minW="250px" minH="230px" boxShadow='lg' rounded='md'>
            <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center"  margin="20px" borderBottom="1px solid grey" >
                {isEditing? 
                    <Input name="editedText" id="editedText" onChange={e => updateTodo(todo.id, "task", e.target.value)} autoFocus={true} minH="150px" marginBottom="30px"/> : 
                    <>
                        <CardHeader>
                            {!todo.inProgress? 
                            <Heading size="md" height="20px" textDecorationLine="line-through">{todo.task} </Heading>
                            :<Heading size="md" height="20px">{todo.task} </Heading>}
                        </CardHeader>
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
                        <Button onClick={toggleEditing}><CheckIcon /></Button>: 
                        <HStack spacing={2} marginBottom="20px" >
                            <Checkbox  size="lg" paddingRight="20px" colorScheme="gray" onChange={() => toggleProgress(todo.id, todo.inProgress)} isChecked={!todo.inProgress}/>
                            <Button size="md" bg="none" onClick={toggleEditing}  color="#333652"><EditIcon /> </Button>
                            <Button size="md" bg="none" alignSelf="flex-end" onClick={() => deleteTodo(todo.id)} color="#333652"><MinusIcon /></Button>
                        </HStack>
                    }
                </Stack>
            </Box>
        </Card>
    )
}

export default Todo;