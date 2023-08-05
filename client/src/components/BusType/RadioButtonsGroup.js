// import React from "react";
// import {
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   FormLabel,
// } from "@mui/material";

// export default function RadioButtonsGroup() {
//   const [acValue, setAcValue] = React.useState("AC");
//   const [busTypeValue, setBusTypeValue] = React.useState("Sleeper");

//   const handleAcChange = (event) => {
//     setAcValue(event.target.value);
//   };

//   const handleBusTypeChange = (event) => {
//     setBusTypeValue(event.target.value);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "left",
//         marginTop: "3rem",
//         marginLeft: "4rem",
//         marginRight: "4rem",
//       }}
//     >
//       <FormControl component="fieldset">
//         <FormLabel component="legend">AC / Non AC</FormLabel>
//         <RadioGroup
//           aria-label="ac"
//           name="ac"
//           value={acValue}
//           onChange={handleAcChange}
//           style={{ flexDirection: "row" }}
//         >
//           <FormControlLabel value="AC" control={<Radio />} label="AC" />
//           <FormControlLabel value="Non AC" control={<Radio />} label="Non AC" />
//         </RadioGroup>
//       </FormControl>

//       <FormControl component="fieldset" style={{ marginTop: "2rem" }}>
//         <FormLabel component="legend">Bus Type</FormLabel>
//         <RadioGroup
//           aria-label="bustype"
//           name="bustype"
//           value={busTypeValue}
//           onChange={handleBusTypeChange}
//           style={{ flexDirection: "row" }}
//         >
//           <FormControlLabel value="Sleeper" control={<Radio />} label="Sleeper" />
//           <FormControlLabel value="Chair" control={<Radio />} label="Chair" />
//         </RadioGroup>
//       </FormControl>
//     </div>
//   );
// }



