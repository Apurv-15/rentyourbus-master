import React from 'react';
import { AppBar, Box, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import { Adb as AdbIcon } from '@mui/icons-material';

function Subnavbar() {
  const menuItems = [
    { label: 'Travel Details', link: '/travel-details' },
    { label: 'Confirm Bus type', link: '/confirm-bus-type' },
    { label: 'Review Journey', link: '/review-journey' },
    { label: 'Payment', link: '/payment' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#46aa8ff' }}>
      <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 700,
            color: '#fff',
            textDecoration: 'none',
            width: '100%',
          }}
        >
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <Box mx={4} />}
              {`${index + 1}. ${item.label}`}
            </React.Fragment>
          ))}
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Menu
            id="menu-appbar"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem>
              <Typography textAlign="center"></Typography>
            </MenuItem>
          </Menu>
        </Box>

        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'Black',
            textDecoration: 'none',
          }}
        ></Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

        <Box sx={{ flexGrow: 0 }}>
          <Menu sx={{ mt: '45px' }} id="menu-appbar" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Subnavbar;
