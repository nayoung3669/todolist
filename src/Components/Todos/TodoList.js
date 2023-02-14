import React, { useContext } from "react";
import './TodoList.css'
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { DataContext } from './DataProvider'
import { Stack, Box } from "@chakra-ui/react";

function TodoList() {
    const [todos, setTodos] = useContext(DataContext);
    console.log(todos);

    // const createTodos = (data) =>{
    //     console.log(data);
    //     setTodos([...todos, data]);
    // }

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

    // const toggleProgress = (id, checked ) => {
    //     const updatedTodos = todos.map((todo) => {
    //         if(id === todo.id) {
    //             return {...todo, inProgress: checked};
    //         } else {
    //             return todo;
    //         }
    //     })
    //     setTodos(updatedTodos);
    // }

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
                                    // toggleProgress={toggleProgress}
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