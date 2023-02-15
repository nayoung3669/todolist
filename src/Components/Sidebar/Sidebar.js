import React, { useState} from 'react'
import './Sidebar.css'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Divider, Text } from '@chakra-ui/react'
import userImage from '../../assets/user/userImage.png'
import { Link} from 'react-router-dom'

const Sidebar = () => {
    const [open, setOpen] = useState(true);

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
                        <li><Link to="/"> <Text>All Tasks</Text></Link></li>
                        <li><Text>Category<ChevronDownIcon boxSize={7} /></Text></li>
                        <li><Link to="/active"><Text>Active Tasks</Text></Link></li>
                        <li><Link to="/completed"><Text>Completed Tasks</Text></Link></li>
                    </ul>
                    
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar