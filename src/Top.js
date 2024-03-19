import { Box, Text, Button } from '@chakra-ui/react';

function Top() {
  return (
    <Box
      bg="darkBlue"
      color="white"
      height="100vh"
      backgroundImage="top_contact.jpg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box padding="4" maxWidth="1200px" margin="0 auto">
        <Text fontSize="xl" fontWeight="bold">
          誰もが軽やかに、<br/>
          ワクワクしながら<br/>
          働ける社会へ
        </Text>
        <Text my="4">
        Everyone feels light,Towards a society where people can<br/>
        work with excitement.
        </Text>
        <Button colorScheme="orange" variant="solid">
          Project report - GO
        </Button>
      </Box>
    </Box>
  );
}

export default Top;
