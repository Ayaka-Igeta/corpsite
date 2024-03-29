import React from 'react';
import { Box, Flex, Link, Image, useBreakpointValue } from '@chakra-ui/react';

function Header() {
  const mxValue = useBreakpointValue({ base: "20px", md: "100px" });
  const ptValue = useBreakpointValue({ base: "15px", md: "30px" });
  const imageHeight = useBreakpointValue({ base: "15px", md: "20px" });
  const fontSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Flex bg=""
          color="FFF"
          align="center"
          justify="space-between"
          mx={mxValue} 
          pt={ptValue} 
          height="80px" 
          >

      <Box ml="4px">
          <Image src="logo_B2B.png" alt="B2B Makers Logo" height={imageHeight} />
      </Box>

      <Box flex={1} mr="16px" textAlign="right" fontSize={fontSize}>
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
