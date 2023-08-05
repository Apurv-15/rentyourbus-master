import React, {useState, useEffect} from "react";
import PaymentIcon from '@mui/icons-material/Payment';
import {
  Typography,
  Grid,
  Box,
  Button
} from "@mui/material";
// import { pink } from "@mui/material/colors";
import { useAuth0 } from "@auth0/auth0-react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Review() {
  const navigate = useNavigate();
  const { user } = useAuth0();
  let gg = user.email
  const [email, setEmail] = useState(gg);
  console.log(email);
  const [ticketData, setTicketData] = useState(null);

  const fetchTicketData = async () => {
    try {
      const res = await fetch("http://localhost:5000/ticket");
      const data = await res.json();
      console.log(data)
      setTicketData(data);
    } catch (error) {
      console.error("Error fetching ticket data: ", error);
    }
  };

  useEffect(() => {
    fetchTicketData();
  }, [email]);

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/okok", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },body:JSON.stringify({
            email
        })
        
    });
    console.log(res)
    toast.success("Order placed successfully");
    navigate("/"); // Redirect to the "/home" route
  };

 
  return (
    
    <>
    <ToastContainer />
      <Box
        marginLeft={"600px"}
        width={"400px"}
        height={"500px"}
        marginTop={"50px"}
        align="center"
        borderColor={"red"}
        border={1}
        borderRadius={10}
      >
        <Grid container width={"350px"}>
          <Grid item xs alignContent="center">
            <Typography marginTop={"50px"} variant="h4">
              Order Summary
            </Typography>
          </Grid>
        </Grid>
         
        {ticketData && (
          <>
            <Grid item width={"350px"} marginY="15px" lg="6" align="left">
              <Typography variant="h6">From: {ticketData.from}</Typography>
            </Grid>
            <Grid item width={"350px"} marginY="15px" lg="6" align="left">
              <Typography variant="h6">To: {ticketData.to}</Typography>
            </Grid>
            <Grid item width={"350px"} marginY="15px" lg="6" align="left">
              <Typography variant="h6">Date: {ticketData.date}</Typography>
            </Grid>
            <Grid item width={"350px"} marginY="15px" lg="6" align="left">
              <Typography variant="h6">
                Journey Type: {ticketData.journeytype}
              </Typography>
            </Grid>
            <Grid item width={"350px"} marginY="15px" lg="6" align="left">
              <Typography variant="h6">
                Bus Size: {ticketData.bussize}
              </Typography>
            </Grid>
            <Grid item width={"350px"} marginY="15px" lg="6" align="left">
              <Typography variant="h6">Bus Type: {ticketData.bustype}</Typography>
            </Grid>
            <Grid item width={"350px"} marginY="15px" lg="6" align="left">
              <Typography variant="h6">AC: {ticketData.ac}</Typography>
            </Grid>
            <Grid item width={"350px"} lg="6" align="left">
              <Typography variant="h6">
                Total Amount After Taxes: {ticketData.totalAmount}
              </Typography>
            </Grid>
          </>
        )}

        <Button
          onClick={sendEmail}
          variant="contained"
          size="large"
          sx={{ width: "50%", top: "50px" }}
          marginTop="500px"
          startIcon={<PaymentIcon />}
        >
          Proceed to pay
        </Button>
      </Box>
    </>
  );
}