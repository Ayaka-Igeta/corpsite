import { Box, Center, Text, Image } from '@chakra-ui/react';

function Community() {
  return (
    
      <Box
      width={{ base: "100%", sm: "80%", md: "80%" }}
      minH={{ base: "100%", sm: "80%", md: "80%" }} 
      marginX="auto"
      bg="#5ABCB9"
      position="relative"
      zIndex="1"
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
              fontSize={{ base: "24px", md: "32px", lg: "40px" }}
              fontFamily="'Helvetica'"
              position="relative"
              color="white"
              mt="80px"
              textAlign="center"
              _after={{
                content: "''",
                position: 'relative',
                display: 'block',
                height: '8px',
                width: '100%',
                mt: '4px',
                marginBottom: '-4px',
                background: 'linear-gradient(to right, #FFC857, #FFC857, #DCA7A7)',
              }}
            >
              Community
            </Text>
          </Center>

          <Center w="full" my={{ base: "20px", md: "40px" }}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              gap="20px"
              w="full"
            >

        <Box w={{ base: "100%", md: "40%" }} p="8" bg="white" borderRadius="lg" shadow="md" m="4">
          <Image src="homeschool.png" alt="homeschool" borderRadius="md" />
          <Text mt="4" fontSize="lg" fontWeight="bold">
            Homeschool x Tech Education
          </Text>
          <Text mt="2">
            Homeschoolでテック教育をサポートするアプリケーション。
          </Text>
        </Box>
        
        <Box w={{ base: "100%", md: "40%" }} p="8" bg="white" borderRadius="lg" shadow="md" m="4">
          <Image src="IMG_1290.png" alt="inner journal" borderRadius="md" />
          <Text mt="4" fontSize="lg" fontWeight="bold">
            Inner Journal
          </Text>
          <Text mt="2">
            自己理解を深めるジャーナリングアプリケーション。
          </Text>
        </Box>
            </Box>
          </Center>
        </Box>
      </Box>
  );
}

export default Community;
