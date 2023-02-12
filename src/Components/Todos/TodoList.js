import React, { useState } from "react";
import TodoForm from "./NewTodoForm";
import Todo from "./Todo";


function TodoList() {
    const [todos, setTodos] = useState([
        { id: "", task: "ex1", completed: false },
        { id: "", task: "ex2", completed: false }
    ]);

    const createTodos = (data) =>{
        console.log(data);
        setTodos([...todos, data]);
    }

    const updateTodos = (id, updatedtask) => {
        const update = () => {
            todos.map((todo) => {
                if (todo.id === id) {
                     return todo.task = updatedtask
                }
            })
        }
        update();
    }

    const deleteTodos = (data) => {

    } 

    return (
        <div>
            <TodoForm updateTodos={createTodos} />
            <ul>
                {todos.map ((todo) => {
                    return (
                    <li>
                        <Todo 
                            update={updateTodos}
                            delete={deleteTodos}
                            todo={todo}
                        />
                    </li>)
                })}
            </ul>
        </div>
    )

            }

export default TodoList;