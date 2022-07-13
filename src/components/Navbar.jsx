import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { DarkModeSharp, DarkMode, Mail, Notifications, NoStroller } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: 'space-between'
})

const Search = styled("div")(({theme}) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))

const Icons = styled(Box)(({theme}) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up("sm")]:{
        display: 'flex'
    }

}))

const UserBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up("sm")]:{
        display: 'none'
    }
}))



const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position = 'sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}} >
                LOONA
            </Typography>
            {/* <DarkMode /> */}
            <DarkModeSharp sx={{display: {xs: "block", sm: "none"}}} />
            <Search><InputBase placeholder='search...'/></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>
                <Badge badgeContent={7} color="error">
                    <Notifications />
                </Badge>
                <Avatar onClick={e => setOpen(!open)} />
            </Icons>
            <UserBox>
                <Avatar 
                    onClick={e => setOpen(!open)}
                    sx={{ width: 30, height: 30 }}
                />
                <Typography variant="span">John</Typography>
            </UserBox>
            
            
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e => setOpen(!open)}
            anchorOrigin={{
                vertical: "top",
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <MenuItem onClick={e => setOpen(!open)} >Profile</MenuItem>
            <MenuItem onClick={e => setOpen(!open)} >My Account</MenuItem>
            <MenuItem onClick={e => setOpen(!open)} >Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar