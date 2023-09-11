import React from 'react'
import '../CSS/Navbar.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

  return (
    <>
        <AppBar position="static" style={{backgroundColor:'white'}}>
            <Container maxWidth="xl" >
                <Toolbar >
                <Typography
                    component="a"
                    href="/"
                    style={{
                    textDecoration: 'none',
                    }}
                >
                    <h1 className='logo'>TIKSEAT</h1>
                </Typography>

                <Box style={{ flexGrow: 1, display:'flex', justifyContent:'center' }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        style={{ my: 2, color: '#ECB71F', display: 'block', fontSize:"18px" }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>
                {/* <Box style={{ flexGrow: 0, display:'flex'}}>
                    <Typography
                        component="a"
                        href="/"
                        style={{
                        textDecoration: 'none',
                        }}
                    >
                        <p>Sign In</p>
                    </Typography>
                    
                    <Typography
                        component="a"
                        href="/"
                        style={{
                        textDecoration: 'none',
                        }}
                    >
                        <p>Sign Up</p>
                    </Typography>
                </Box> */}
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </>
  )
}

export default Navbar