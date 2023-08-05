import React from 'react';
import MyProfile from './MyProfile';
import MyBookings from './MyBookings';
import ManageBookings from './ManageBookings';

const Rightbar = ({ activeTab }) => {
  return (
    <>
      {activeTab === 'My Profile' && <MyProfile />}
      {activeTab === 'My Bookings' && <MyBookings />}
      {activeTab === 'Manage Bookings' && <ManageBookings />}
    </>
  );
};

export default Rightbar;
