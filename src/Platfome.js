import { Box, Center, Text, Image, Button } from '@chakra-ui/react';

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

        <Center my={{ base: "20px", md: "40px" }} mb={{ base: "20px", md: "20px" }}>
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
            Web3 Platfome
          </Text>
        </Center>

        <Center >
        <Image 
          src="Ideaflowbank.png" 
          alt="イメージの説明" 
          boxSize={{ base: "100px", md: "800px" }} 
          objectFit="contain" 
        />
      </Center>


        <Center my={{ base: "20px", md: "40px" }} mb={{ base: "20px", md: "20px" }}>
        <Button
          bg="#FFC857" 
          color="white"
          _hover={{ bg: "#e6b347" }} // ホバー時の背景色
        >
          What's Idea Flow Bank?
        </Button>
      </Center>

        <Center my={{ base: "20px", md: "40px" }} >
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

        <Center my={{ base: "20px", md: "40px" }}>
          <Box d="flex" justifyContent="space-around" flexWrap="wrap">
            <Image src="homeschool.png" alt="homeschool" p="4" />
            <Image src="homeschool.png" alt="inner journal" p="4" />
          </Box>
        </Center>
      </Box>
    </Box>
  );
}

export default App;
