import { Box, Heading } from "@chakra-ui/react";
import React from "react";

function HomePage() {
  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>Welcome to Next.js!</Heading>
    </Box>
  );
}

export default HomePage;
