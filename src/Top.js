import { Flex, Box, Text, useBreakpointValue, } from '@chakra-ui/react';
import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const 
  Top = () => {
  useEffect(() => {
    AOS.init(); // AOSを初期化
  }, []);

  // レスポンシブでフォントサイズを調整する
  const fontSize = useBreakpointValue({ base: '48pt', md: '56pt' });
  const boxSize = useBreakpointValue({ base: '90vw', md: '725px' });
  const boxHeight = useBreakpointValue({ base: '60vw', md: '600px' });
  const buttonTextSize = useBreakpointValue({ base: '14pt', md: '20pt' });


  return (
    <Flex
      height="100vh"
      direction="column"
      justify="start"
      backgroundImage="top_contact.jpg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="relative"
    >
      {/* 中央のボックス */}
      <Box
        position="relative"
        top="80px"
        ml="80px"
        width={boxSize}
        height={boxHeight}
        bg="#5ABCB940" // 40% opacity
        padding="4"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Text
          as="h1"
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily="Hiragino Kaku Gothic Std, sans-serif"
          color="white"
          mt="63px"
          textAlign="left"
          ml="48px"
        >
          誰もが軽やかに、<br/>
          ワクワクしながら<br/>
          輝ける社会へ
        </Text>
        <Text
          fontSize={buttonTextSize}
          fontFamily="Helvetica, sans-serif"
          color="#5ABCB9"
          my="16px"
          ml="48px"
        >
          Everyone feels light, Towards a society where people can work with excitement.
        </Text>
      </Box>

      <Box textAlign="left" transform="rotate(180deg)" position="absolute" top="0" right="0" >
      <Text
        fontSize={{ base: "5xl", sm: "6xl", md: "7xl", lg: "8xl" }}
        data-aos="fade-up-right"
        fontStyle="italic"
        fontWeight="bold"
        fontFamily="Helvetica Neue"
        
        sx={{
          writingMode: "vertical-rl", // テキストを縦に配置
          background: 'linear-gradient(to right, #FFC857, #FFC857, #DCA7A7)', // グラデーションの背景
          WebkitBackgroundClip: "text", // 背景クリップをテキストに適用
          WebkitTextFillColor: "transparent", // グラデーションをテキストの色として適用
          display: "inline-block", // 背景クリップとグラデーションを適用するために必要
        }}
      >
        DAO Community
      </Text>
     </Box>
    </Flex>
  );
}

export default Top;
