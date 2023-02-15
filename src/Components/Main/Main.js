import React,{useState} from 'react'
import TodoList from '../Todos/TodoList'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import ActiveTasks from '../Sidebar/Menu/Categories/ActiveTasks'
import { Route, Routes } from 'react-router-dom'
import CompletedTasks from '../Sidebar/Menu/Categories/CompletedTasks'

const Main = () => {
    const [menu, setMenu] = useState("all")

    return (
        <div className='main'>
            <Sidebar menu={menu} setMenu={setMenu}/>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/active" element={<ActiveTasks />} />
                <Route path="/completed" element={<CompletedTasks/>} />
            </Routes>
        </div>
    )
}

export default Main;