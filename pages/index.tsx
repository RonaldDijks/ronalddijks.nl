import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <Container>
        <Heading size="md">Ronald's blog</Heading>
        <Box>
          Hello, I'm Ronald. I write about interesting things I'm working on or
          thinking of. Mosty I talk about programming but I also digress into
          DSP, hardware and other random things.
        </Box>
      </Container>
    </Layout>
  );
}

export default HomePage;
