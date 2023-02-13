import { Text } from '@chakra-ui/react'
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <Text fontSize="2em" ml="40px" > Todo List</Text>
    </div>
  )
}

export default Header