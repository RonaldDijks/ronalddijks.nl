import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { frontMatter as introData } from "./blog/intro.mdx";

function formatPath(p: string) {
  return p.replace(/\.mdx$/, "");
}

function BlogPost({ post }: { post: typeof introData }) {
  return (
    <NextLink href={formatPath(post.__resourcePath)} passHref>
      <Link width="100%" _hover={{ textDecoration: "none" }}>
        <Box mb={8} display="block" width="100%">
          <Heading as="h3" size="md" mb={2} fontWeight="medium">
            {post.title}
          </Heading>
          <Text>{post.summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
}

export default function BlogPage() {
  const posts = [introData];
  return (
    <Layout>
      <Container>
        <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
          Blog
        </Heading>
        <Stack>
          {posts.map((post) => {
            return <BlogPost key={post.__resourcePath} post={post} />;
          })}
        </Stack>
      </Container>
    </Layout>
  );
}
