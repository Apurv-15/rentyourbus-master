import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  Typography,
  Container,
  CssBaseline,
  makeStyles,
  Grid,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";

export default function BusBook(props) {
  const handleClick = () => {
    props.sendData(true);
  };

  const handleSendToParent = (data) => {
    props.sendToParent(data);
  };

  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Book a Private Bus
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Kindly Fill Out The Fields!
            </Typography>
          </Container>
          <Container style={{ marginTop: "50px" }}>
            <Grid container spacing={2} justifyContent="center" direction="row">
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="From"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="To"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Journey Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Journey Type"
                  >
                    <MenuItem>Journey</MenuItem>
                    <MenuItem>Return</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3} style={{ marginTop: "30px" }}>
                <Button onClick={() => handleSendToParent(false)} fullWidth variant="contained">
                  Proceed
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}
