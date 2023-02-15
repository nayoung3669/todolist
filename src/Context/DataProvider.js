import React, { useState, createContext, useEffect } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todoStore')));

    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos))
    },[todos]);

    const deleteTodos = id => {
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
        console.log(editedValue);
        const updatedTodos = [...todos];
        updatedTodos.forEach((todo, index) => {
            if(index === id) {
                todo.task = editedValue;
            }
        })
        setTodos(updatedTodos);
    }
    


    return (
        <DataContext.Provider value={{todos,
        setTodos: setTodos,
        deleteTodos: deleteTodos,
        switchComplete: switchComplete,
        handleEditedValue: handleEditedValue}}>
            {props.children}
        </DataContext.Provider>
    )
}
