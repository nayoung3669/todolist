import React from 'react'
import './Sidebar.css'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react'
import ActiveTasks from './Menu/ActiveTasks'


const Sidebar = ({todos, menu, setMenu}) => {


    return (
        <Box className='sidebar' minW="230px">
            {/* <ChevronRightIcon className='toggle' boxSize={8}/> */}
            <Box className='menu_bar'>
                <ul className='menu_categories' >
                    <li><Button borderRadius={10} width="100%" onClick={() => setMenu("all")} >All Tasks</Button></li>
                    <li><Button borderRadius={10} width="100%" >Category<ChevronDownIcon boxSize={7}  /></Button></li>
                    <li><Button borderRadius={10} width="100%" onClick={() => setMenu("active")}>Active Tasks</Button></li>
                    <li><Button borderRadius={10} width="100%" onClick={() => setMenu("completed")} >Completed Tasks</Button></li>
                </ul>
            </Box>
        </Box>
    )
}

export default Sidebar