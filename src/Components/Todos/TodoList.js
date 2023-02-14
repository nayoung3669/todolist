import React, { useState } from "react";
import './TodoList.css'
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { Stack, Box } from "@chakra-ui/react";


function TodoList({todos, setTodos}) {

    const createTodos = (data) =>{
        console.log(data);
        setTodos([...todos, data]);
    }

    const updateTodos = (id, editedText) => {
        const updatedTodos = todos.map((todo) => {
            if (id === todo.id) {
                return {...todo, task: editedText} 
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

    const toggleProgress = (id, state) => {
        const updatedTodos = todos.map((todo) => {
            if(id === todo.id && state) {
                return {...todo, inProgress: false};
            } else {
                return {...todo, inProgress: true};
            }
        })
        setTodos(updatedTodos);
        console.log("todostate-----")
        console.log(todos)
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