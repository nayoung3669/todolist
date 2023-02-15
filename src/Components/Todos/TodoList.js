import React, { useContext, useState } from "react";
import './TodoList.css'
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { DataContext } from './DataProvider'
import { Stack, Box, Text } from "@chakra-ui/react";

function TodoList() {
    const [todos, setTodos] = useContext(DataContext);
    const [checkAll, setCheckAll] = useState(false);

    console.log(todos);

    const deleteTodos = (id) => {
        const deletedList = todos.filter((todo, index) => index !== id);
        setTodos(deletedList);
    } 

    const switchComplete = id => {
        const updatedTodos = [...todos];
        updatedTodos.forEach((todo, index) => {
            if(index === id) {
                todo.complete = !todo.complete
            }
        })
        setTodos(updatedTodos);
    }
    
    const handleEditedValue = (editedValue, id) => {
        const updatedTodos = [...todos];
        updatedTodos.forEach((todo, index) => {
            if(index === id) {
                todo.task = editedValue;
            }
        })
        setTodos(updatedTodos);
    }

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
                                    deleteTodo={deleteTodos}
                                    handleEditedValue={handleEditedValue}
                                    checkComplete={switchComplete}
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