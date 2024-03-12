import React from 'react';
import { Box, Flex, Text, Link, Spacer } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex
      bg="#FFF"
      color="#151515"
      flexDirection="column" // 子要素を縦に並べる
      alignItems="center"
      justifyContent="center"
      p={{ base: "16px", md: "20px" }}
      minheight="100px"
    >
      {/* ナビゲーションリンク */}
      <Box textAlign="center" w="full">
        <Link href="/" mr="24px">
          Home
        </Link>
        <Link href="/" mr="24px">
          Mission
        </Link>
        <Link href="/" mr="24px">
          Platform/Project
        </Link>
        <Link href="/" mr="24px">
          Members
        </Link>
        <Link href="/concept" mr="24px">
          Company
        </Link>
        <Link href="/contact" mr="24px">
          Contact
        </Link>
        {/* 言語切り替えのリンク */}
        <Link href="/" mr="16px" fontFamily="Helvetica" fontWeight="bold">
          EN
        </Link>
        <Link href="/" fontFamily="Helvetica" fontWeight="bold">
          JA
        </Link>
        
     {/* コピーライトのテキスト */}
      <Text fontSize="14px" pl={{ base: "14px", md: "16px" }} mt="4" mb="16px">
        © 2023 B2Bmakers Co.,Ltd | 株式会社 B2B Makers
      </Text>
      <Spacer />

      </Box>
    </Flex>
  );
}

export default Footer;
