import React from 'react'
import DrawerRouter from '../components/Drawer'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Dashboard =()=> {
  return (
    <>
    <div>dashboard</div>
    <h1>Dashboard</h1>
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
    </Stack>  
    <DrawerRouter/>

    </>
  )
}

export default Dashboard