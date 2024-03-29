import { Box, Text, Button, ChakraProvider } from '@chakra-ui/react';
import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
  
function Platform() {
  useEffect(() => {
    AOS.init(); // AOSを初期化
  }, []);

  return (
    <ChakraProvider>
      <Box
        width={{ base: "100%", sm: "80%", md: "80%" }}
        minH={{ base: "100%", sm: "80%", md: "80%" }} 
        marginX="auto"
        bg="#5ABCB9"
        position="relative"
      >
          <Box
            position="relative"
            width="full"
            height={{ base: "auto", md: "auto" }} // モバイルでは内容に応じて、中サイズでは固定高さ
            pt={{ base: "20px", md: "0" }} // モバイルでの上パディング
          >
            <Box
              position="relative"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              px={{ base: "4", md: "8" }} // 内側のパディングもレスポンシブに
            >
              <Text
                fontSize={{ base: "24px", md: "32px", lg: "40px" }} // フォントサイズの調整
                fontFamily="Helvetica"
                color="white"
                mt="80px"
                textAlign="center" // 中央揃え
                _after={{
                  content: "''",
                  position: 'relative',
                  display: 'block',
                  height: '8px',
                  width: '100%',
                  mt: '4px', // 上マージン
                  bgGradient: 'linear(to-r, #FFC857, #FFC857, #DCA7A7)', // グラデーション
                }}
              >
                Web3 Platform
              </Text>

              <Text
                fontSize={{ base: "36px", md: "60px", lg: "96px" }}
                data-aos="fade-up"
                fontFamily="Montserrat"
                fontStyle="italic"
                fontWeight="900"
                letterSpacing={{ base: "-1.0px", md: "-1.5px" }} 
                color="white"
                mt={{ base: "20px", md: "30px" }} 
              >
                Idea flow Bank
              </Text>

              <Text
                fontSize={{ base: "36px", md: "60px", lg: "96px" }}
                fontFamily="Montserrat"
                fontStyle="italic"
                fontWeight="900"
                letterSpacing={{ base: "-1.0px", md: "-1.5px" }}
                color="transparent"
                sx={{
                  WebkitTextStroke: "1px white",
                  position: "relative", 
                  mt: { base: "-130px", md: "-130px", lg: "-130px" },
                  opacity: 0.5, 
                  transform: {
                    base: "translateX(-2px) translateY(80px)", // ベースサイズでの調整
                    md: "translateX(-4px) translateY(42px)", // 中サイズでの調整
                    lg: "translateX(-8px) translateY(-8px)" // 大サイズでの調整
                  } 
                }}
                  >
                    Idea flow Bank
                  </Text>

              <Button
                fontSize={{ base: "16px", md: "20px", lg: "24px" }} // ボタンのフォントサイズをレスポンシブに
                fontFamily="Helvetica"
                data-aos="flip-left"
                color="white"
                mt="40px"
                mb="80px"
                bg="#FFC857"
                _hover={{ bg: "#e6b347" }}
                w={{ base: "90%", sm: "200px", md: "280px" }} // ボタンの幅をレスポンシブに
                h={{ base: "32px", md: "48px" }} // ボタンの高さをレスポンシブに
                borderRadius="20px"
                border="2px solid white"
              >
                Click here
              </Button>
            </Box>
          </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Platform;
