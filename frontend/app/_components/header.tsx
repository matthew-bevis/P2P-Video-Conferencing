'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import Link from 'next/link';

const pages = ['Join Call', 'Host Call', 'Settings'];
const nav = ['join', 'host', 'settings'];

const Header: React.FC = () => {
    const [anchorNav, setAnchorNav] = React.useState<null | HTMLElement>(null);
    
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorNav(null);
    }
    return (
      <AppBar position="static" sx={{width:'100%'}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Box sx={{flexGrow: 1, display:'flex'}}>
                <Link href='/'>
                    <HomeOutlined/>
                </Link>
            </Box>
            <Box sx={{flexGrow: 1, display:'flex', justifyContent: 'flex-end'}}>
                <IconButton
                    size='large'
                    onClick={handleOpenNavMenu}
                    color='inherit'>
                <MenuIcon/>
                </IconButton>
                <Menu
                    anchorEl={anchorNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}
                    open={Boolean(anchorNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block'},
                    }}
                    >

                        {pages.map((page, index) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Link href={`/${nav[index]}`}>
                                    <Typography textAlign="center">{page}</Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
            </Box>
            </Toolbar>
        </Container>
      </AppBar>
    );
  }

export default Header;