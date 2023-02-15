import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <Box className='header' borderTopRadius={15} >
        <Text fontSize="2.2em" ml="50px" > Todo List</Text>
    </Box>
  )
}

export default Header