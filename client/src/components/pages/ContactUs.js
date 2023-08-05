import React, { useState } from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const paperStyle = { padding: '60px 30px', width: 450, margin: '40px auto' };
  const headerStyle = { margin: 0 };

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    console.log('firstName:', firstName);
    console.log('lastName:', lastName);
    console.log('phone:', phone);
    console.log('email:', email);
    console.log('address:', address);
    console.log('message:', message);

    if (firstName && lastName && phone && email && address && message) {
      try {
        const res = fetch(
          'https://pvtbusbooking-1-default-rtdb.firebaseio.com/userDataRecords.json',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName,
              lastName,
              phone,
              email,
              address,
              message,
            }),
          }
        );

        if (res) {
          setUserData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            message: '',
          });
          alert('Data Stored');
        } else {
          throw new Error('Failed to store data. Please try again.');
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <Grid container>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Contact Us</h2>
          <Typography variant="caption" gutterBottom>
            Please fill out the form below to get in touch.
          </Typography>
        </Grid>
        <form onSubmit={submitData}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="firstName"
                id="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                value={userData.firstName}
                onChange={postUserData}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="lastName"
                id="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={userData.lastName}
                onChange={postUserData}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="phone"
                id="phone"
                label="Phone Number"
                variant="outlined"
                fullWidth
                value={userData.phone}
                onChange={postUserData}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="email"
                id="email"
                label="Email ID"
                variant="outlined"
                fullWidth
                value={userData.email}
                onChange={postUserData}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="address"
                id="address"
                label="Add Address"
                variant="outlined"
                fullWidth
                value={userData.address}
                onChange={postUserData}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                name="message"
                id="message"
                label="Enter Your Message"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={userData.message}
                onChange={postUserData}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default Contact;
