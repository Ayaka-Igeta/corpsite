import React from 'react';
import { Box, Flex, Text, Image, SimpleGrid, Center } from '@chakra-ui/react';

const Member = ({ name, role, imageSrc }) => {
  return (
    <Flex direction="column" align="center" textAlign="center" mx="24px" zIndex="2">
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
      h={["auto", "auto", "auto", "1090px"]} // デスクトップでの高さを990pxに設定
      bgImage="url('member.jpg')"
      bgSize="cover"
      bgPos="center center"
      p={["20px", "20px", "40px"]}
      position="relative" // 背景に対して相対的に配置
    >
      {/* 画像の色を薄くするためのオーバーレイ */}
      <Box
        position="absolute" // 親Flexコンポーネントに対して絶対位置指定
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="white"
        opacity="0.5" // オーバーレイの透明度調整
        zIndex="1" // 他の要素よりも背面に配置
      ></Box>

      {/* オーバーレイより前面に配置されるべきコンテンツのコンテナ */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        position="relative" // オーバーレイより前面に配置
        zIndex="2" // オーバーレイより上のレイヤー
        w="100%" // 親コンポーネントの幅に合わせる
      >
        <Center my={{ base: "20px", md: "40px" }} mb={{ base: "20px", md: "80px" }}>
          <Text
            fontSize={{ base: "24px", md: "32px" }}
            fontFamily="'Helvetica'"
            position="relative"
            _after={{
              content: "''",
              position: 'absolute',
              display: 'block',
              height: '4px',
              width: '100%',
              bottom: '0',
              marginBottom: '-4px',
              background: 'linear-gradient(to right, #FFC857, #FFC857, #DCA7A7)',
            }}
          >
            B2B Members
          </Text>
        </Center>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="40px">
          <Member name="Saki Honda" role="Chief Visionary" imageSrc="saki.jpg" />
          <Member name="Tomoyo Shuto" role="Chief Community" imageSrc="shutomo.jpg" />
          <Member name="Ayaka Igeta" role="Chief Public Relations" imageSrc="ayaka.jpg" />
          <Member name="Daichi Sugahara" role="Chief Technology" imageSrc="daichi.jpg" />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Members;
