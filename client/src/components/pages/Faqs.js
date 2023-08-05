import React from "react";
import { CssBaseline, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledMain = styled("main")({
  padding: "50px 0",
  backgroundColor: "#f5f5f5",
});

const StyledTypography = styled(Typography)({
  color: "#333",
  marginBottom: "20px",
});

export default function Faqs() {
  return (
    <>
      <CssBaseline />
      <StyledMain>
        <Container maxWidth="sm">
          <StyledTypography variant="h2" align="center">
            Frequently Asked Questions
          </StyledTypography>
          <StyledTypography variant="h4" align="left" paragraph>
            How do I book a bus?
          </StyledTypography>
          <StyledTypography variant="h6" align="left" paragraph>
            To book a bus, simply navigate to the booking page, select your
            desired date, destination, and number of passengers, and click the
            'Book Now' button.
          </StyledTypography>
          <StyledTypography variant="h4" align="left" paragraph>
            Are there any discounts available?
          </StyledTypography>
          <StyledTypography variant="h6" align="left" paragraph>
            Yes, we offer various discounts and promotional offers throughout
            the year. Keep an eye on our website or subscribe to our newsletter
            to stay updated with the latest deals.
          </StyledTypography>
          <StyledTypography variant="h4" align="left" paragraph>
            Can I cancel my booking?
          </StyledTypography>
          <StyledTypography variant="h6" align="left" paragraph>
            Yes, you can cancel your booking. However, please note that
            cancellation policies and fees may vary depending on the type of
            booking and the time of cancellation. Please refer to our
            cancellation policy for more information.
          </StyledTypography>
          <StyledTypography variant="h4" align="left" paragraph>
            How can I contact customer support?
          </StyledTypography>
          <StyledTypography variant="h6" align="left" paragraph>
            You can reach our customer support team by calling our toll-free
            number or sending an email to support@busrentalapp.com. Our team is
            available 24/7 to assist you with any queries or concerns.
          </StyledTypography>
        </Container>
      </StyledMain>
    </>
  );
}
