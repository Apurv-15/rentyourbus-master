import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Grid,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Paper,
  Stack,
  Button
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, height: "370px", width: "350px" }}>
         
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Item>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ width: "100%" }}
        >
          <Tab label="Datesheet" {...a11yProps(0)} sx={{ minWidth: "170px" }} />
          <Tab label="Cancellation" {...a11yProps(1)} sx={{ minWidth: "170px" }} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Box sx={{ marginTop: "40px", height: "70%" }}>
            <Grid item marginBottom={5} xs={12} md={3}>
              <FormControl className="dobby" fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ width: "100%" }}>
                  Choose Booking
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="No of Bookings"
                  sx={{ width: "100%" }}
                >
                  <MenuItem>Booking No 1</MenuItem>
                  <MenuItem>Booking No 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item marginBottom={5} xs={12} md={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="dobby" sx={{ width: "100%" }} />
              </LocalizationProvider>
            </Grid>
          </Box>
          <Grid item xs={12} md={3} style={{ marginTop: "50px" }}>
            <Button onClick={handleChange} fullWidth variant="contained">
              Proceed
            </Button>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Box sx={{ marginTop: "40px", height: "70%" }}>
            <Grid item marginBottom={5} xs={12} md={3}>
              <FormControl className="dobby" fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ width: "100%" }}>
                  Choose Booking
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="No of Bookings"
                  sx={{ width: "100%" }}
                >
                  <MenuItem>Booking No 1</MenuItem>
                  <MenuItem>Booking No 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <FormControl sx={{ marginLeft: "20px" }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Are you sure?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Grid item xs={12} md={3} style={{ marginTop: "40px" }}>
            <Button onClick={handleChange} fullWidth variant="contained">
              Confirm
            </Button>
          </Grid>
        </TabPanel>
      </Item>
    </Stack>
  );
}
