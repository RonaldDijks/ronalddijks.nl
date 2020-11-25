import { Box } from "@chakra-ui/react";
import React from "react";

const Container: React.FC = ({ children }) => {
  return (
    <Box
      marginRight="auto"
      marginLeft="auto"
      maxWidth="680px"
      paddingRight="10px"
      paddingLeft="10px"
    >
      <Box>{children}</Box>
    </Box>
  );
};

export default Container;
