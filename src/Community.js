import { Box, Center, Text, Image } from '@chakra-ui/react';

function Community() {
  return (
    <Box w="full" minH="100vh" bg="#5ABCB940" position="relative" zIndex="1">
      <Box
        maxW="1600px"
        w="full"
        mx="auto"
        minH="1074px"
        bg="#5ABCB90"
        position="relative"
        zIndex="2"
        p={{ base: "16px", md: "32px" }}
      >
        <Box
          position="relative"
          width="full"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {/* Community Text */}
          <Center my={{ base: "20px", md: "40px" }}>
            <Text
              fontSize={{ base: "24px", md: "32px" }}
              fontFamily="'Helvetica'"
              position="relative"
              color="white"
              _after={{
                content: "''",
                position: 'absolute',
                display: 'block',
                height: '8px',
                width: '100%',
                bottom: '0',
                marginBottom: '-4px',
                background: 'linear-gradient(to right, #FFC857, #FFC857, #DCA7A7)',
              }}
            >
              Community
            </Text>
          </Center>

          {/* Other Content */}
          <Center w="full" my={{ base: "20px", md: "40px" }}>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              flexWrap="wrap"
              w="full"
            >
              {/* Each image is now in a flex container that takes up half the width on larger screens */}
              <Box w={{ base: "100%", md: "50%" }} p="4" display="flex" justifyContent="center" alignItems="center">
                <Image src="homeschool.png" alt="homeschool" w="auto" maxW="100%" maxHeight="100%" />
              </Box>
              <Box w={{ base: "100%", md: "50%" }} p="4" display="flex" justifyContent="center" alignItems="center">
                <Image src="homeschool.png" alt="inner journal" w="auto" maxW="100%" maxHeight="100%" />
              </Box>
            </Box>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}

export default Community;
