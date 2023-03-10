import React, { useContext, useState } from "react";
import './TodoList.css'
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { DataContext } from '../../Context/DataProvider'
import { Stack, Box, Text } from "@chakra-ui/react";

function TodoList() {
    const {todos, setTodos} = useContext(DataContext);
    const [checkAll, setCheckAll] = useState(false);

    const handleCheckAll = () => {
        const updatedTodos = [...todos]
        updatedTodos.forEach((todo) => {
            todo.complete = !checkAll
        })
        setTodos(updatedTodos);
        setCheckAll(!checkAll);
    }
    
    const incompleteCount = () => {
        var count = 0;
        todos.forEach((todo) => {
            if (todo.complete === false) {
                count +=1;
            }
        })
        return count;
    }

    return (
            <Stack className="cards" width="100%" bg="#E9EAEC" p="28px" border="2px solid #333652">
                <NewTodoForm />
                <Box className="todoList" >
                    <ul>
                        {todos.map ((todo, index) => {
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
                </Box>
                <Box className="allButton" display="flex" flex-direction="row">
                    <input type="checkbox" name="allButton" id="allButton" checked={checkAll} onClick={handleCheckAll}/> <Text>ALL</Text>
                </Box>
                <Text>{incompleteCount()} tasks left</Text>
            </Stack>
    )
}

export default TodoList;