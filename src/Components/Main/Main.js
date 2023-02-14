import React,{useState} from 'react'
import TodoList from '../Todos/TodoList'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import ActiveTasks from '../Sidebar/Menu/ActiveTasks'

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [menu, setMenu] = useState("")

    const activeList = todos.filter(todo => todo.inProgress)
    const completedList = todos.filter(todo => !todo.inProgress)

    return (
        <div className='main'>
            <Sidebar todos={todos} menu={menu} setMenu={setMenu}/>
            {menu === "all" ? <TodoList todos={todos} setTodos={setTodos} /> : null}
            {menu === "active" ? <ActiveTasks todos={activeList}/> : null }
            {menu === "completed?" ? <ActiveTasks todos={completedList} /> : null};
            

        </div>
    )
}

export default Main