import React,{useState} from 'react'
import TodoList from '../Todos/TodoList'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import ActiveTasks from '../Sidebar/Menu/ActiveTasks'

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [menu, setMenu] = useState([""])


    const updateActiveTodos = () => {
        const updatedList = todos.filter(todo => !todo.inProgress)
        setMenu("active");
        return (
            <ActiveTasks updatedList={updatedList}/>
        )
    }

    const completedList = () => {

    }

    return (
        <div className='main'>
            <Sidebar todos={todos} activeTodos={updateActiveTodos} completedList={completedList}/>
            {menu === "active" ? <ActiveTasks /> : <TodoList todos={todos} setTodos={setTodos} /> }
            

        </div>
    )
}

export default Main