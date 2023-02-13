import React,{useState} from 'react'
import TodoList from '../Todos/TodoList'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'

const Main = () => {
    const [todos, setTodos] = useState([]);


    const activeList = () => {
    }

    const completedList = () => {

    }
        
    return (
        <div className='main'>
            <Sidebar todos={todos}/>
            <TodoList todos={todos} setTodos={setTodos} />

        </div>
    )
}

export default Main