import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Flex
      w="100vw" // コンテナの幅をビューポートの100%にします。
      h={["25vh", "30vh", "35vh", "800px"]} // 異なるビューポートサイズでの高さを配列で指定します。
      bg="#000000" 
      bgImage="top_contact.jpg"
      bgSize="cover"
      bgPos="center center"
      align="center"
      justify="center"
      position="relative"
    >
        <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgColor="rgba(0, 0, 0, 0.5)" // オーバーレイの色と不透明度を指定
        zIndex="1" // オーバーレイを背景とテキストの間に配置
      />
       <Box p={["20px", "20px", "40px"]} 
       textAlign="center" 
       zIndex="2"
       mt={{ base: "40px", md: "80px", lg: "80px" }}
       >
       <Text
  fontSize={{ base: "24px", md: "32px", lg: "40px" }}
  fontFamily="Helvetica"
  color="white"
  mt="80px"
  textAlign="center"
  position="relative" 
  display="inline-block" 
  _after={{
    content: "''",
    position: 'absolute',
    bottom: '-4px', 
    left: '0', 
    right: '0', 
    height: '8px',
    width: 'auto', 
    bgGradient: 'linear(to-r, #FFC857, #FFC857, #DCA7A7)' 
  }}
>
  Contact us
</Text>


        <Text 
        fontSize={{ base: "16px", md: "20px", lg: "32px" }}
        color="#FFF" 
        mb={["20px", "24px", "80px"]}
        zIndex="2">
          {/* お気軽にご連絡ください！ */}
        </Text>

        <Button
          fontSize={{ base: "16px", md: "20px", lg: "24px" }} 
          fontFamily="Helvetica"
          data-aos="flip-left"
          color="white"
          bg="#FFC857"
          p={["10px", "10px", "20px"]}
          _hover={{ bg: "#e6b347" }}
          w={{ base: "90%", sm: "200px", md: "280px" }} // ボタンの幅をレスポンシブに
          h={{ base: "32px", md: "48px" }} // ボタンの高さをレスポンシブに
          borderRadius="20px"
          border="2px solid white"
        >
          Click here
        </Button>
      </Box>
    </Flex>
  );
};

export default Contact;
