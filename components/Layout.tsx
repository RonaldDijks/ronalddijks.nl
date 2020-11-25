import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import Container from "./Container";

const Navigation = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginTop="1em"
      paddingTop="2em"
      paddingBottom="2em"
    >
      <div>
        <NextLink href="/" passHref>
          <a>
            <Heading as="h1" size="md">
              Ronald Dijks
            </Heading>
          </a>
        </NextLink>
      </div>
      <div>
        <NextLink href="/about" passHref>
          <Button as="a" variant="ghost" padding={[1, 4]}>
            About
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button as="a" variant="ghost" padding={[1, 4]}>
            Blog
          </Button>
        </NextLink>
      </div>
    </Box>
  );
};

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <Navigation />
      </Container>
      {children}
    </>
  );
};

export default Layout;
