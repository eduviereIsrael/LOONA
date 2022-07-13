import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

const Righbar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs: 'none', sm: "block"}}} >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Doe" src='/static/images/avatar/1.jpg' />
          <Avatar alt="Jamie Doe" src='/static/images/avatar/1.jpg' />
          <Avatar alt="Lukas Doe" src='/static/images/avatar/1.jpg' />
          <Avatar alt="Mary Doe" src='/static/images/avatar/1.jpg' />
          <Avatar alt="Dodo Doe" src='/static/images/avatar/1.jpg' />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default Righbar