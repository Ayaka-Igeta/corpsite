import { Box, Text, Image, Button, Center, ChakraProvider } from '@chakra-ui/react';

function Platform() {
  return (
    <Box
      w="full"
      minH="100vh"
      bg="#5ABCB9"
      position="relative"
      zIndex="1"
    >
        <Box position="relative" width="full" height="300px">
          <Box position="absolute" top="0" left="0" right="0" bottom="0" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box position="relative">
              <Text
                fontSize={{ base: "24px", md: "32px" }}
                fontFamily="'Helvetica'"
                color="white"
                mt="20px"
                _after={{
                  content: "''",
                  position: 'absolute',
                  display: 'block',
                  height: '8px',
                  width: '100%',
                  bottom: '-4px',
                  background: 'linear-gradient(to right, #FFC857, #FFC857, #DCA7A7)',
              
                }}
              >
                Web3 Platform
              </Text>
            </Box>

            {/* 新しいテキストコンポーネントをここに挿入 */}
            <Text
              fontSize={{ base: "6xl", md: "8xl" }} // 104ptに相当するサイズに調整する
              fontFamily="'Montserrat'"
              fontStyle="italic"
              fontWeight="ExtraBold 800 Italic"
              color="white"
              mt={{ base: "20px", md: "30px" }} // テキスト間のマージンを調整
            >
              Idea flow Bank
            </Text>

            <Button
              bg="#FFC857"
              color="white"
              _hover={{ bg: "#e6b347" }}
              mt="20px" // ボタンとの間隔
            >
              What's Idea Flow Bank?
            </Button>
          </Box>
        </Box>
    </Box>
  );
}

export default Platform;
