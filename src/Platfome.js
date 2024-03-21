import { Box, Center, Text, Image } from '@chakra-ui/react';

function App() {
  return (
    <Box
      w="full"
      minH="100vh" 
      bg="#5ABCB940" 
      position="relative" 
      zIndex="1"
    >
      <Box
        maxW="1600px" 
        w="full" 
        mx="auto" 
        minH="1074px" 
        bg="#5ABCB9"
        position="relative"
        zIndex="2" 
        p={{ base: "16px", md: "32px" }} // Responsive padding
      >

        
        <Center my={{ base: "20px", md: "40px" }} mb={{ base: "20px", md: "80px" }}>
          <Text
            fontSize={{ base: "24px", md: "32px" }}
            fontFamily="'Helvetica'"
            position="relative"
            color="white"
            _after={{
              content: "''",
              position: 'absolute',
              display: 'block',
              height: '4px',
              width: '100%',
              bottom: '0',
              marginBottom: '-4px',
              background: 'linear-gradient(to right, #FFC857, #FFC857, #DCA7A7)',
            }}
          >
            Web3 Platfome
          </Text>
        </Center>

        <Center my={{ base: "20px", md: "40px" }} mb={{ base: "20px", md: "80px" }}>
          <Text
            fontSize={{ base: "24px", md: "32px" }}
            fontFamily="'Helvetica'"
            position="relative"
            color="white"
            _after={{
              content: "''",
              position: 'absolute',
              display: 'block',
              height: '4px',
              width: '100%',
              bottom: '0',
              marginBottom: '-4px',
              background: 'linear-gradient(to right, #FFC857, #FFC857, #DCA7A7)',
            }}
          >
            Community
          </Text>
        </Center>

        {/* Image placeholders for screenshots */}
        <Center my={{ base: "20px", md: "40px" }}>
          <Box d="flex" justifyContent="space-around" flexWrap="wrap">
            <Image src="/path/to/your/image1.png" alt="スクリーンショット1" p="4" />
            <Image src="/path/to/your/image2.png" alt="スクリーンショット2" p="4" />
            {/* Use the actual paths to your screenshot images */}
          </Box>
        </Center>
      </Box>
    </Box>
  );
}

export default App;
