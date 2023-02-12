import React, { useState } from 'react'
import { Checkbox, Text, Box, Input, Stack, HStack } from '@chakra-ui/react'
import { DeleteIcon, EditIcon, CheckIcon } from '@chakra-ui/icons'


const Todo = ({updateTodo, deleteTodo, todo}) => {
    const [isEditing, setIsEditing] = useState(false)

    const toggleEditing = () => {
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }

    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="450px" minW="50px" margin="20px" borderBottom="1px solid grey">
            
            {isEditing? 
                <Input name="editedText" id="editedText" onChange={e => updateTodo(todo.id, e.target.value)}/> : 
                <>
                    <Checkbox colorScheme="gray" border="1px solid grey"></Checkbox>
                    <Text height="40px">{todo.task}</Text> 
                </>
            }
            <Stack display="flex" flexDirection="row" width="62px" >
                {isEditing? 
                    <CheckIcon onClick={toggleEditing}/>: 
                    <HStack spacing={5}>
                        <EditIcon onClick={toggleEditing} boxSize={5} color="#8d7966"/> 
                        <DeleteIcon alignSelf="flex-end" onClick={() => deleteTodo(todo.id)}  boxSize={5} color="#8d7966"/>
                    </HStack>
                }
            </Stack>
            
        </Box>
    )
}

export default Todo;