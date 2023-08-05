import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import {
  Grid,
  Paper,
  Stack,
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
        <Box sx={{ p: 8, height: "500px", width: "550px" }}>
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
      spacing={7}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Item>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
  <Tab label="Past" {...a11yProps(0)} sx={{ minWidth: 180 }} />
  <Tab label="Awaiting" {...a11yProps(1)} sx={{ minWidth: 180 }} />
  <Tab label="Upcoming" {...a11yProps(2)} sx={{ minWidth: 180 }} />
</Tabs>

        <TabPanel value={value} index={0}>
          
        </TabPanel>

        <TabPanel value={value} index={1}>
          
        </TabPanel>

        <TabPanel value={value} index={2}>
         
        </TabPanel>
      </Item>
    </Stack>
  );
}