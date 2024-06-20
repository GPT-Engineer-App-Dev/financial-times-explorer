import { Box, Container, Flex, Heading, Link, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" bg="#f3f2ef">
      {/* Header */}
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px" borderColor="gray.200">
        <Image src="/images/logo.png" alt="Financial Times Logo" boxSize="50px" />
        <Flex as="nav" gap={4}>
          <Link href="#top-stories">Top Stories</Link>
          <Link href="#latest-news">Latest News</Link>
          <Link href="#trending-topics">Trending Topics</Link>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex as="main" py={8} gap={8}>
        <Box flex="3">
          <VStack align="stretch" spacing={8}>
            <Box id="top-stories">
              <Heading as="h2" size="lg" mb={4}>Top Stories</Heading>
              <Text>Top story content goes here...</Text>
            </Box>
            <Box id="latest-news">
              <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
              <Text>Latest news content goes here...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" id="trending-topics">
          <Heading as="h2" size="lg" mb={4}>Trending Topics</Heading>
          <Text>Trending topics content goes here...</Text>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" py={4} justifyContent="space-between" alignItems="center" borderTop="1px" borderColor="gray.200">
        <Text>&copy; 2023 Financial Times</Text>
        <Flex gap={4}>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#privacy-policy">Privacy Policy</Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;