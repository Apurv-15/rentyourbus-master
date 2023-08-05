import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import Rightbar from './Rightbar';

const ProfilePage2 = ({ mode, setMode }) => {
  const [activeTab, setActiveTab] = useState('My Profile'); // Set the default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Box flex={1} p={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding sx={{ py: 2 }}>
            <ListItemButton onClick={() => handleTabClick('My Profile')}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="My Profile" sx={{ fontSize: '2.0rem' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ py: 2 }}>
            <ListItemButton onClick={() => handleTabClick('My Bookings')}>
              <ListItemIcon>
                <DirectionsBusFilledIcon />
              </ListItemIcon>
              <ListItemText
                primary="My Bookings"
                sx={{ fontSize: '2.0rem' }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ py: 2 }}>
            <ListItemButton onClick={() => handleTabClick('Manage Bookings')}>
              <ListItemIcon>
                <DepartureBoardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Manage Bookings"
                sx={{ fontSize: '2.0rem' }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Rightbar activeTab={activeTab} />
    </Box>
  );
};

export default ProfilePage2;
