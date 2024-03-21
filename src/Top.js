import { Box, Text, Button, useBreakpointValue, Image } from '@chakra-ui/react';

function Top() {
  // レスポンシブでフォントサイズを調整する
  const fontSize = useBreakpointValue({ base: '48pt', md: '56pt' });
  const boxSize = useBreakpointValue({ base: '90vw', md: '725px' });
  const boxHeight = useBreakpointValue({ base: '60vw', md: '600px' });
  const buttonWidth = useBreakpointValue({ base: 'full', md: '200px' }); 
  const buttonHeight = useBreakpointValue({ base: 'auto', md: '40px' }); 
  const buttonTextSize = useBreakpointValue({ base: '14pt', md: '20pt' });

  return (
    <Box
      bg="darkBlue"
      color="white"
      height="100vh"
      backgroundImage="top_contact.jpg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="relative"
    >
      {/* 中央のボックス */}
      <Box
        position="absolute"
        top="80px"
        left="50%"
        transform="translateX(-100%)"
        zIndex="2"
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
          fontWeight="bold"
          fontFamily="Helvetica, sans-serif"
          color="#5ABCB9"
          my="16px"
          ml="48px"
        >
          Everyone feels light, Towards a society where people can work with excitement.
        </Text>
        <Button
          bgColor="#FFC857"
          color="#FFF"
          borderRadius="20px" 
          width={buttonWidth} 
          height={buttonHeight} 
          variant="solid"
          alignSelf="flex-start"
          ml="48px"
        >
          Project page
        </Button>
      </Box>

      {/* 画像の追加 */}
      <Image
        src="Mother×web.png" // 正しいパスに変更してください
        alt="Mother×web logo"
        position="absolute"
        right="0"
        top="0"
        height="auto"
        maxHeight="100vh"
      />
    </Box>
  );
}

export default Top;
