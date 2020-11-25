import { Box, Button, Heading, Link } from "@chakra-ui/react";
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
      as="header"
    >
      <Box>
        <NextLink href="/" passHref>
          <Link>
            <Heading as="h1" size="md">
              Ronald Dijks
            </Heading>
          </Link>
        </NextLink>
      </Box>
      <Box>
        <NextLink href="/blog" passHref>
          <Button as="a" variant="ghost" padding={[1, 4]}>
            Blog
          </Button>
        </NextLink>
      </Box>
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
