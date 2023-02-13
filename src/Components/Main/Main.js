import React from 'react'
import TodoList from '../Todos/TodoList'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'

const Main = () => {
    

        
    return (
        <div className='main'>
            <Sidebar />
            <TodoList />

        </div>
    )
}

export default Main