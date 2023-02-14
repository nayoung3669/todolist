import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todoStore')));

    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos))
    },[todos]);

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
