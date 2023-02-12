import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { VStack, Box } from "@chakra-ui/react";


function TodoList() {
    const [todos, setTodos] = useState([
        { id: "", task: "ex1", completed: false },
        { id: "", task: "ex2", completed: false }
    ]);

    const createTodos = (data) =>{
        console.log(data);
        setTodos([...todos, data]);
    }

    const updateTodos = (id, editedText) => {
        const updatedTodos = todos.map((todo) => {
            if (id === todo.id) {
                return {...todo, task: editedText}
                
            } else {
                return {...todo}
            }
        })
        setTodos(updatedTodos);
    }

    const deleteTodos = (id) => {
        console.log("cl")
        const deletedList = todos.filter(todo => id !== todo.id);
        setTodos(deletedList);
    } 

    return (
        <Box width="100%">
            <NewTodoForm updateTodos={createTodos} />
            <VStack display="flex" flexDirection="column" alignItems="flex-start" bg="#eeeeee" width="510px" minW="400px">
                <ul>
                    {todos.map ((todo) => {
                        return (
                        <li>
                            <Todo 
                                updateTodo={updateTodos}
                                deleteTodo={deleteTodos}
                                todo={todo}
                            />
                        </li>)
                    })}
                </ul>
            </VStack>
        </Box>
    )

            }

export default TodoList;