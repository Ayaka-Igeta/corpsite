import React from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';

const ContactBanner = () => {
  return (
    <Flex
      w="100vw" // コンテナの幅をビューポートの100%にします。
      h={["25vh", "30vh", "35vh", "460px"]} // 異なるビューポートサイズでの高さを配列で指定します。
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
       <Box p={["20px", "20px", "40px"]} textAlign="center" zIndex="2">
        <Text
        fontSize={["24px", "28px", "36px"]}
        fontFamily="Helvetica"
        color="#FFF"
        mb={["16px", "20px", "24px"]}
        position="relative"
>
     <Box as="span" position="relative" _after={{
      content: "''",
      position: 'absolute',
      display: 'block',
      height: '8px',
      width: '100%', // spanの幅に合わせて100%にします
      left: 0,
      bottom: '-12px', // 下線とテキストの間の余白
      background: 'linear-gradient(to right, #FFC857, #FFC857, #DCA7A7)'
    }}>
    Contact us
  </Box>
</Text>

        <Text 
        fontSize={["24px", "24px", "24px"]} 
        color="#FFF" 
        mb={["16px", "20px", "40px"]}
        zIndex="2">
          私たちとお話ししませんか？
        </Text>

        <Button
        size="md"
        bg="#FFC857"
        color="#FFF" 
        _hover={{ bg: "#e6b64c" }}
        p={["10px", "10px", "20px"]}
        borderRadius="20px" 
        width="200px" 
        >
        Click here
        </Button>
      </Box>
    </Flex>
  );
};

export default ContactBanner;
