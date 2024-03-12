import React from 'react';
import { Box, Flex, Text, Image, SimpleGrid } from '@chakra-ui/react';

const Member = ({ name, role, imageSrc }) => {
  return (
    <Flex direction="column" align="center" textAlign="center" mx="24px">
      <Image
        src={imageSrc}
        alt={name}
        boxSize={["150px", "200px", "250px"]} // レスポンシブなイメージサイズ
        borderRadius="full"
        objectFit="cover"
        mb="24px" // 画像とテキストの間の余白
      />
      <Text fontSize="xl" fontWeight="bold" mb="4">{name}</Text>
      <Text fontSize="md">{role}</Text>
    </Flex>
  );
};

const Members = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100vw"
      h={["auto", "auto", "auto", "890px"]} // デスクトップでの高さを890pxに設定
      bgImage="url('/path_to_your_background_image.jpg')"
      bgSize="cover"
      bgPos="center center"
      p={["20px", "20px", "40px"]}
    >
      <Box p={["20px", "20px", "40px"]} textAlign="center" zIndex="2">
        <Text
          fontSize={["24px", "28px", "36px"]}
          fontFamily="Helvetica"
          color="#FFF"
          mb={["16px", "20px", "24px"]}
          position="relative"
        >
          B2B Members
          <Box as="span" position="relative" _after={{
            content: "''",
            position: 'absolute',
            display: 'block',
            height: '8px',
            width: '100%', // spanの幅に合わせて100%にします
            left: 0,
            bottom: '-12px', // 下線とテキストの間の余白
            background: 'linear-gradient(to right, #FFC857, #FFC857, #DCA7A7)'
          }} />
        </Text>
      </Box>  

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="40px">
        <Member name="Saki Honda" role="Chief Visionary" imageSrc="saki.jpg" />
        <Member name="Tomoyo Shuto" role="Chief Community" imageSrc="shutomo.jpg" />
        <Member name="Ayaka Igeta" role="Chief Public Relations" imageSrc="ayaka.jpg" />
        <Member name="Daichi Sugahara" role="Chief Technology" imageSrc="daichi.jpg" />
      </SimpleGrid>
    </Flex>
  );
};

export default Members;
