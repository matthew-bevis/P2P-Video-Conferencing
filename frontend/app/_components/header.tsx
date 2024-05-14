'use client'

import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Switch,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useThemeContext } from '../themes/themeContext'; // Adjust the import path as necessary

// Define a structure for navigation items to reduce redundancy and enhance readability
const navigationItems = [
  { name: 'Join Call', path: '/join', icon: <PhoneInTalkOutlinedIcon /> },
  { name: 'Host Call', path: '/host', icon: <PhoneInTalkOutlinedIcon /> },
  { name: 'Settings', path: '/settings', icon: <SettingsOutlinedIcon /> },
];

const Header = () => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const { toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorNav(null);

  // Render navigation links based on the current view (mobile/desktop)
  const renderNavLinks = () => (
    navigationItems.map(({ name, path, icon }) => (
      <Link key={name} href={path} passHref>
        <MenuItem onClick={handleCloseNavMenu}>
          <IconButton color="inherit" size="large">
            {icon}
            {!isMobile && <Typography ml={1}>{name}</Typography>}
          </IconButton>
        </MenuItem>
      </Link>
    ))
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Link href="/" passHref>
              <IconButton color="inherit"><HomeOutlinedIcon /></IconButton>
            </Link>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleOpenNavMenu}
                  sx={{ ml: 'auto' }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorNav}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={Boolean(anchorNav)}
                  onClose={handleCloseNavMenu}
                >
                  {renderNavLinks()}
                </Menu>
              </>
            ) : (
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                {renderNavLinks()}
              </Box>
            )}
          </Box>
          <Switch
            onChange={toggleTheme}
            checked={theme.palette.mode === 'dark'}
            inputProps={{ 'aria-label': 'theme toggle' }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
