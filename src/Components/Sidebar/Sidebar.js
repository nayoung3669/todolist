import React from 'react'
import './Sidebar.css'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react'


const Sidebar = () => {


    return (
        <Box className='sidebar' minW="230px">
            {/* <ChevronRightIcon className='toggle' boxSize={8}/> */}
            <Box className='menu_bar'>
                <ul className='menu_categories' >
                    <li><Button borderRadius={10} width="100%" >All Tasks</Button></li>
                    <li><Button  borderRadius={10} width="100%" >Category<ChevronDownIcon boxSize={7}  /></Button></li>
                    <li><Button borderRadius={10} width="100%" >Active Tasks</Button></li>
                    <li><Button borderRadius={10} width="100%" >Completed Tasks</Button></li>
                </ul>
            </Box>
        </Box>
    )
}

export default Sidebar