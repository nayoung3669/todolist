import React, { useState } from "react";
import './TodoList.css'
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { Stack, Box } from "@chakra-ui/react";


function TodoList() {
    const [todos, setTodos] = useState([]);

    const createTodos = (data) =>{
        console.log(data);
        setTodos([...todos, data]);
    }

    const updateTodos = (id, name, editedText) => {
        const updatedTodos = todos.map((todo) => {
            if (id === todo.id) {
                return {...todo, task: editedText} 
                //change it to name !!!!
                
            } else {
                return todo;
            }
        })
        setTodos(updatedTodos);
    }

    const deleteTodos = (id) => {
        const deletedList = todos.filter(todo => id !== todo.id);
        setTodos(deletedList);
    } 

    const toggleProgress = (id) => {
        const updatedTodos = todos.map((todo) => {
            if(id === todo.id) {
                return {...todo, inProgress: !todo.inProgress};
            } else {
                return todo;
            }
        })
        setTodos(updatedTodos);
        console.log(todos);
    }

    return (
            <Stack className="cards" width="100%" bg="#E9EAEC" padding="15px">
                <NewTodoForm updateTodos={createTodos} />
                <Box className="todoList" >
                    <ul>
                        {todos.map ((todo) => {
                            return (
                            <li>
                                <Todo 
                                    updateTodo={updateTodos}
                                    deleteTodo={deleteTodos}
                                    toggleProgress={toggleProgress}
                                    todo={todo}
                                />
                            </li>)
                        })}
                    </ul>
                </Box>
            </Stack>
    )

            }

export default TodoList;