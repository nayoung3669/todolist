import React from 'react'
import './Sidebar.css'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'

const Sidebar = () => {
  return (
    <Box className='sidebar' minW="230px">
        <ChevronRightIcon className='toggle' boxSize={8}/>
        <Box className='menu_bar'>
            <ul className='menu_categories'>
                <li>sdf</li>
            </ul>
        </Box>
    </Box>
  )
}

export default Sidebar