// import React, { useState } from "react";
// import {
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
// } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import IconButton from "@mui/material/IconButton";

// const ActionAreaCard = () => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleCardSelect = (index) => {
//     setSelectedCard(index);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "left",
//         marginLeft:"3.9rem",
//         marginTop: "0.1rem",
//         padding: "0.1rem",
//       }}
//     >
//       <Card
//         sx={{
//           width: "11rem",
//           height: "12rem",
//           margin: "0 0.5rem",
//           border: selectedCard === 0 ? ".1rem solid green" : "none",
//         }}
//       >
//         <CardActionArea onClick={() => handleCardSelect(0)}>
//           <div style={{ position: "relative" }}>
//             <CardMedia
//               component="img"
//               height="110"
//               image="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"
//               alt="green iguana"
//             />
//             {selectedCard === 0 && (
//               <IconButton
//                 sx={{
//                   position: "absolute",
//                   top: 8,
//                   right: 8,
//                   backgroundColor: "white",
//                 }}
//                 size="small"
//               >
//                 <CheckCircleIcon sx={{ color: "green" }} />
//               </IconButton>
//             )}
//           </div>
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div" textAlign="center">
//               Small Bus
//             </Typography>
//             <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
//               Capacity up to 10
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>

// {/* ----------------------------------------------------------------------------------------------------------- */}
//       {/* Card 2 */}
//       <Card
//         sx={{
//           width: "11rem",
//           height: "12rem",
//           margin: "0 0.5rem",
//           border: selectedCard === 1 ? ".1rem solid green" : "none",
//         }}
//       >
//         <CardActionArea onClick={() => handleCardSelect(1)}>
//           <div style={{ position: "relative" }}>
//             <CardMedia
//               component="img"
//               height="110"
//               image="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"
//               alt="green iguana"
//             />
//             {selectedCard === 1 && (
//               <IconButton
//                 sx={{
//                   position: "absolute",
//                   top: 8,
//                   right: 8,
//                   backgroundColor: "white",
//                 }}
//                 size="small"
//               >
//                 <CheckCircleIcon sx={{ color: "green" }} />
//               </IconButton>
//             )}
//           </div>
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div" textAlign="center">
//               Medium Bus
//             </Typography>
//             <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
//               Capacity up to 28
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>

// {/* //------------------------------------------------------------------------------------------------------------- */}
//       {/* Card 3 */}
//       <Card
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           width: "11rem",
//           height: "12rem",
//           margin: "0 0.5rem",
//           border: selectedCard === 2 ? ".1rem solid green" : "none",
//         }}
//       >
//         <CardActionArea onClick={() => handleCardSelect(2)}>
//           <div style={{ position: "relative" }}>
//             <CardMedia
//               component="img"
//               height="110"
//               image="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"
//               alt="green iguana"
//             />
//             {selectedCard === 2 && (
//               <IconButton
//                 sx={{
//                   position: "absolute",
//                   top: 2,
//                   right: 8,
//                   backgroundColor: "white",
//                 }}
//                 size="small"
//               >
//                 <CheckCircleIcon sx={{ color: "green" }} />
//               </IconButton>
//             )}
//           </div>
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div" textAlign="center">
//               Large Bus
//             </Typography>
//             <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
//               Capacity up to 50
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </div>
//   );
// };

// export default ActionAreaCard;
