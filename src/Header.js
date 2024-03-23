import React from 'react';
import { Box, Flex, Link, Image  } from '@chakra-ui/react';

function Header() {
  return (
    <Flex bg=""
          color="FFF"
          align="center"
          justify="space-between"
          mx="100px"
          pt="30px"
          height="80px" // Flexコンテナの高さを設定
          >
      {/* ロゴまたはタイトル */}
      <Box ml="4px">
          <Image src="logo_B2B.png" alt="B2B Makers Logo" height="20px" />
      </Box>
      {/* ナビゲーションリンク */}
      <Box flex={1} mr="16px" textAlign="right">
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
        <Link href="/" mr="16px" fontFamily="'Helvetica'" fontWeight="bold">
          EN
        </Link>
        <Link href="/" fontFamily="'Helvetica', cursive" fontWeight="bold">
          JA
        </Link>
      </Box>
    </Flex>
  );
}

export default Header;
