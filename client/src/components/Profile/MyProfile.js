import React, { useState, useEffect } from "react";
import { Box, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend API base URL
});

const Rightbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [name, setName] = useState("");
  const [contactno, setContactNo] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (isAuthenticated && user) {
      // Fetch user data from backend using user.email (unique key) when the component mounts
      fetchUserData(user.email);
    }
  }, [isAuthenticated, user]);

  const fetchUserData = (email) => {
    api
      .get(`/users/${email}`)
      .then((response) => {
        const userData = response.data;
        setName(userData.name || "");
        setContactNo(userData.contactno || "");
        setDOB(userData.DOB || "");
        setGender(userData.gender || "");
      })
      .catch((error) => console.error("Error fetching user data: ", error));
  };

  const handleProceed = () => {
    if (!user || !user.email) {
      console.error("No user or email found.");
      return;
    }

    const userData = {
      useremail: user.email,
      name,
      contactno,
      DOB,
      gender,
    };

    api
      .post("/users", userData)
      .then((response) => {
        console.log(response.data);
        toast.success("Information updated successfully!"); // Show the toast notification
      })
      .catch((error) => {
        console.error("Error storing user data: ", error);
        toast.error("Failed to update information. Please try again.");
      });
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Grid container spacing={9} justifyContent="center" direction="row">
        <Grid item xs={12} md={3}>
          <TextField
          required
            fullWidth
            className="dobby"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
          required
            fullWidth
            id="outlined-basic"
            className="dobby"
            label="Date Of Birth"
            variant="outlined"
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
          />
        </Grid>
        <Grid
          container
          spacing={9}
          justifyContent="center"
          direction="column"
        ></Grid>
        <Grid item xs={12} md={3}>
          <TextField
          required
            fullWidth
            className="dobby"
            label="Contact"
            variant="outlined"
            value={contactno}
            onChange={(e) => setContactNo(e.target.value)}
            maxLength={10}
            minLength={10}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            disabled
            id="outlined-basic"
            className="dobby"
            label="Email"
            variant="outlined"
            value={user.email}
          />
        </Grid>
        <Grid
          container
          spacing={9}
          justifyContent="center"
          direction="column"
        ></Grid>
        <Grid item xs={12} md={3}>
          <FormControl className="dobby" fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={50}
          md={8}
          style={{ marginTop: "10px", marginLeft: "700px" }}
        >
          <Button
            sx={{ width: "90", maxWidth: "200%" }}
            justifyContent="center"
            variant="contained"
            onClick={handleProceed}
          >
            Proceed
          </Button>
        </Grid>
      </Grid>
      <ToastContainer position="top-right" />
    </Box>
  );
};

export default Rightbar;
