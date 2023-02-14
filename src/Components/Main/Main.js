import React,{useState} from 'react'
import TodoList from '../Todos/TodoList'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import ActiveTasks from '../Sidebar/Menu/ActiveTasks'
import {DataProvider} from '../Todos/DataProvider'

const Main = () => {
    const [menu, setMenu] = useState("all")

    return (
            <div className='main'>
                <Sidebar menu={menu} setMenu={setMenu}/>
                {/* {menu === "all" ? <TodoList /> : null} */}
                <TodoList />
                {/* {menu === "active" ? <ActiveTasks /> : null } */}
                {/* {menu === "completed?" ? <ActiveTasks todos={completedList} /> : null}; */}
            </div>
    )
}

export default Main;