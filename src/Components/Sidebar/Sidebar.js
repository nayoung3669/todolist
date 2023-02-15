import React, { useState, useContext } from 'react'
import './Sidebar.css'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Divider, Text } from '@chakra-ui/react'
import { DataContext } from '../Todos/DataProvider'
import userImage from '../../assets/user/userImage.png'

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [menu, setMenu] = useState("all")
    const [todos, setTodos] = useContext(DataContext);

    return (
        <Box className='sidebar' minW="230px">
            <div><ChevronRightIcon className='toggle' boxSize={8} border="3px solid #333657" bg="#E9EAEC" borderRadius={50} onClick={() => setOpen(true)} /></div> <br />
            <Box className='menu_bar'>
                <Box display="flex" flex-direction="row" justifyContent="space-evenly"  alignItems="baseline" className="profile">
                    <img src={userImage} alt="userProfile" width="40px" border="2px solid white"/>
                    <Text color="white" fontSize="1.3em" >Hello, user 👋 </Text> 
                </Box><br />
                <Divider/>
                <Box paddingTop="30px">
                    <ul className='menuCategories'>
                        <li><Text borderRadius={10} width="100%" onClick={() => setMenu("all")} >All Tasks</Text></li>
                        <li><Text borderRadius={10} width="100%" >Category<ChevronDownIcon boxSize={7} /></Text></li>
                        <li><Text borderRadius={10} width="100%" onClick={() => setMenu("active")}>Active Tasks</Text></li>
                        <li><Text borderRadius={10} width="100%" onClick={() => setMenu("completed")} >Completed Tasks</Text></li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar