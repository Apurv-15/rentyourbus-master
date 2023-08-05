import React from 'react'
import {CssBaseline, Container, Typography} from "@mui/material"

export default function Policy() {
  return (
    <>
    <CssBaseline/>
    <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "50px"}}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              style={{ color: 'black' }}
              gutterBottom
              paddingBottom="50px"

            >
              Our Policies
            </Typography>
            <Typography
              variant="h4"
              align="left"
              color="textSecondary"
              style={{ color: 'black' }}
              paragraph
            >
              Booking Policy
            </Typography>
            <Typography
              variant="h6"
              align="left"
              color="textSecondary"
              fontWeight="normal"
              style={{ color: 'black' }}
              paragraph
            >
                To make a booking, you must provide accurate information and adhere to our terms and conditions. Payment is required at the time of booking to secure your reservation.
            </Typography>
            <Typography
              variant="h4"
              align="left"
              color="textSecondary"
              fontWeight="normal"
              style={{ color: 'black' }}
              paragraph
            >
                Refund Policy  
            </Typography>
            <Typography
              variant="h6"
              align="left"
              color="textSecondary"
              fontWeight="normal"
              style={{ color: 'black' }}
              paragraph
            >
                Refunds are available for cancellations made within 48 hours of the scheduled departure time. Please review our refund policy for detailed information on eligibility and refund processing.           
            </Typography>
            <Typography
              variant="h4"
              align="left"
              fontWeight="normal"
              color="textSecondary"
              style={{ color: 'black' }}
              paragraph
            >
                Privacy Policy
            </Typography>
            <Typography
              variant="h6"
              align="left"
              fontWeight="normal"
              color="textSecondary"
              style={{ color: 'black' }}
              paragraph
            >
                We value your privacy and take appropriate measures to protect your personal information. Our privacy policy outlines how we collect, use, and safeguard your data.         
            </Typography>
            <Typography
              variant="h4"
              align="left"
              fontWeight="normal"
              color="textSecondary"
              style={{ color: 'black' }}
              paragraph
            >
               Terms and Conditions
            </Typography>
            <Typography
              variant="h6"
              align="left"
              fontWeight="normal"
              color="textSecondary"
              style={{ color: 'black' }}
              paragraph
            >
               By using our bus rental services, you agree to abide by our terms and conditions. These terms cover various aspects, including booking, cancellation, liability, and more. Please review them carefully.          
            </Typography>
          </Container>
          </div>
          </main>
    </>
  )
}
