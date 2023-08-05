import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./BusType.css";
import undrawimg from "../images/undraw_booking_re_gw4j.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

export default function BusType() {
  const api = axios.create({
    baseURL: "http://localhost:5000/api", // Replace with your backend API base URL
  });

  const navigate = useNavigate();

  const handleProceed = () => {
    // Handle the proceed action
    // Add your logic here
    // Navigate to the next page
    navigate("/ordersum");

    // Get the selected bus size based on the index of the selectedCard
    const bussizeOptions = ["Small", "Medium", "Large"];
    const bussize = bussizeOptions[selectedCard];

    // Get the selected bus type and AC value from the state
    const bustype = busTypeValue;
    const ac = acValue;

    // Send the data to the backend
    api
      .post("/tempbooking", { bussize, bustype, ac })
      .then((response) => {
        console.log(response.data);
        toast.success("Booking details updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating booking details: ", error);
        toast.error("Failed to update booking details. Please try again.");
      });
  };

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  const [acValue, setAcValue] = React.useState("AC");
  const [busTypeValue, setBusTypeValue] = React.useState("Sleeper");

  const handleAcChange = (event) => {
    setAcValue(event.target.value);
  };

  const handleBusTypeChange = (event) => {
    setBusTypeValue(event.target.value);
  };

  return (
    <div className="big-peu">
      <div className="Bus-type-m1">
        <Typography
          variant="h4"
          component="h2"
          align="left"
          color="black"
          padding="32px"
          marginTop="10px"
        >
          Select Bus Size
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "left",
            marginLeft: "3.9rem",
            marginTop: "0.1rem",
            padding: "0.1rem",
          }}
        >
          <Card
            sx={{
              width: "11rem",
              height: "12rem",
              margin: "0 0.5rem",
              border: selectedCard === 0 ? ".1rem solid green" : "none",
            }}
          >
            <CardActionArea onClick={() => handleCardSelect(0)}>
              <div style={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="110"
                  image="https://www.shutterstock.com/shutterstock/photos/587896730/display_1500/stock-vector-vector-illustration-of-shuttle-bus-tempo-traveller-concept-transportation-idea-587896730.jpg"
                  alt="green iguana"
                />
                {selectedCard === 0 && (
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "white",
                    }}
                    size="small"
                  >
                    <CheckCircleIcon sx={{ color: "green" }} />
                  </IconButton>
                )}
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                >
                  Small Bus
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  Capacity up to 10
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* ----------------------------------------------------------------------------------------------------------- */}
          {/* Card 2 */}
          <Card
            sx={{
              width: "11rem",
              height: "12rem",
              margin: "0 0.5rem",
              border: selectedCard === 1 ? ".1rem solid green" : "none",
            }}
          >
            <CardActionArea onClick={() => handleCardSelect(1)}>
              <div style={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="110"
                  image="https://www.transportnetworkaustralia.com.au/wp-content/uploads/2019/12/fleet-21-seat-1030x688.jpg"
                  alt="green iguana"
                />
                {selectedCard === 1 && (
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "white",
                    }}
                    size="small"
                  >
                    <CheckCircleIcon sx={{ color: "green" }} />
                  </IconButton>
                )}
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                >
                  Medium Bus
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  Capacity up to 28
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* //------------------------------------------------------------------------------------------------------------- */}
          {/* Card 3 */}
          <Card
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "11rem",
              height: "12rem",
              margin: "0 0.5rem",
              border: selectedCard === 2 ? ".1rem solid green" : "none",
            }}
          >
            <CardActionArea onClick={() => handleCardSelect(2)}>
              <div style={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="110"
                  image="https://arrowstagelines.com/wp-content/uploads/2022/02/2048x741_Neoplan_HOF_MAN_2021_width_2048_height_741.jpg"
                  alt="green iguana"
                />
                {selectedCard === 2 && (
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 2,
                      right: 8,
                      backgroundColor: "white",
                    }}
                    size="small"
                  >
                    <CheckCircleIcon sx={{ color: "green" }} />
                  </IconButton>
                )}
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                >
                  Large Bus
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  Capacity up to 50
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        {/* <RadioButtonsGroup /> */}
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Radio button grp\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            marginTop: "3rem",
            marginLeft: "4rem",
            marginRight: "4rem",
          }}
        >
          <FormControl component="fieldset">
            <FormLabel component="legend">AC / Non AC</FormLabel>
            <RadioGroup
              aria-label="ac"
              name="ac"
              value={acValue}
              onChange={handleAcChange}
              style={{ flexDirection: "row" }}
            >
              <FormControlLabel value="AC" control={<Radio />} label="AC" />
              <FormControlLabel
                value="Non AC"
                control={<Radio />}
                label="Non AC"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" style={{ marginTop: "2rem" }}>
            <FormLabel component="legend">Bus Type</FormLabel>
            <RadioGroup
              aria-label="bustype"
              name="bustype"
              value={busTypeValue}
              onChange={handleBusTypeChange}
              style={{ flexDirection: "row" }}
            >
              <FormControlLabel
                value="Sleeper"
                control={<Radio />}
                label="Sleeper"
              />
              <FormControlLabel
                value="Chair"
                control={<Radio />}
                label="Chair"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <Grid container justifyContent="right" mt={1}>
          {/* Add the "proceed-button-center" class to center the button */}
          <div className="proceed-button-center"></div>
        </Grid>
        <Grid marginLeft={"720px"}>
          <Button onClick={handleProceed} variant="contained" color="primary">
            Proceed
          </Button>
        </Grid>
      </div>
      <div className="Bus-type-m2">
        <img src={undrawimg} alt="not found" />
      </div>
         
    </div>
  );
}
