import React, { useContext } from "react";
import './TodoList.css'
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { DataContext } from './DataProvider'
import { Stack, Box } from "@chakra-ui/react";

function TodoList() {
    const [todos, setTodos] = useContext(DataContext);
    console.log(todos);

    // const updateTodos = (id, editedText) => {
    //     const updatedTodos = todos.map((todo) => {
    //         if (id === todo.id) {
    //             return {...todo, task: editedText} 
    //         } else {
    //             return todo;
    //         }
    //     })
    //     setTodos(updatedTodos);
    // }

    // const deleteTodos = (id) => {
    //     const deletedList = todos.filter(todo => id !== todo.id);
    //     setTodos(deletedList);
    // } 

    const switchComplete = (id) => {
        const updatedTodos = [...todos];
        updatedTodos.forEach((todo, index) => {
            if(index === id) {
                todo.complete = !todo.complete
            }
        })
        setTodos(updatedTodos);
    }

    return (
            <Stack className="cards" width="100%" bg="#E9EAEC" padding="15px">
                <NewTodoForm />
                <Box className="todoList" >
                    <ul>
                        {todos.map ((todo, index) => {
                            return (
                            <li>
                                <Todo
                                    // updateTodo={updateTodos}
                                    // deleteTodo={deleteTodos}
                                    checkComplete={switchComplete}
                                    todo={todo}
                                    key={index}
                                    id={index}
                                />
                            </li>)
                        })}
                    </ul>
                </Box>
            </Stack>
    )
            }

export default TodoList;