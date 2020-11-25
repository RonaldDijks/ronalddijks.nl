import { Heading } from "@chakra-ui/react";
import React from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";

export default function BlogPage({ children, frontMatter }: any) {
  return (
    <Layout>
      <Container>
        <Heading mb={4} letterSpacing="tight" fontWeight="medium">
          {frontMatter.title}
        </Heading>
        {children}
      </Container>
    </Layout>
  );
}
