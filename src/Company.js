import React from 'react';
import { Flex, Box, Text, Divider, VStack } from '@chakra-ui/react';

const Company = () => {
  return (
    <Flex 
    direction="column" 
    align="center" 
    justify="center" p={{ base: "4", md: "8", lg: "12" }} 
    minH="100vh" 
    bg="#5ABCB9">
     <Text
        fontSize={{ base: "24px", md: "32px", lg: "32px" }}
        fontFamily="Helvetica"
        color="#FFF"
        mb={["16px", "20px", "40px"]}
        position="relative"
>
     <Box as="span" 
     position="relative" 
     _after={{
      content: "''",
      position: 'absolute',
      display: 'block',
      height: '8px',
      width: '100%', // spanの幅に合わせて100%にします
      left: 0,
      bottom: '-12px', // 下線とテキストの間の余白
      background: 'linear-gradient(to right, #FFC857, #FFC857, #DCA7A7)'
    }}>
    Company
  </Box>
</Text>

      {/* コンテンツエリア */}
      <Box 
        maxWidth="1200px" 
        w="full" 
        color="white"
        bg="#5ABCB9" 
        p={{ base: "4", md: "6", lg: "8" }} 
        boxShadow="0px 8px 24px rgba(0, 0, 0, 0.20)"  
        borderRadius="lg">
        
        <VStack spacing={{ base: "4", md: "6", lg: "8" }} align="start">
          {/* 各項目 */}
          <CompanyInfo 
          title="会社名   |   Company name" 
          content="株式会社B2B Makers" />
          <CompanyInfo
           title="事業内容 | Description of business" 
           content="経営コンサルティング、調査、業務委託、教育、業務支援" />
          <CompanyInfo 
          title="代表取締役 | CEO"
          content="本多 沙妃 | Saki Honda" />
          <CompanyInfo 
          title="社員数 | Number of employees" 
          content="6名 (2024年4月時点)" />
          
          <CompanyInfo 
          title="住所 | Address" 
          content="T104-0031 東京都中央区京橋一丁目5-1 セントラルビル2階" />
        </VStack>
      </Box>
    </Flex>
  );
};

const CompanyInfo = ({ title, content }) => (
  <Box w="full">
    <Text fontWeight="semibold">{title}</Text>
    <Divider my="2" />
    <Text>{content}</Text>
  </Box>
);

export default Company;
