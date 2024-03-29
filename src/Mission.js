import React,{useEffect} from 'react';
import { Box, Text, VStack, Center } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
  
function Mission() {
  useEffect(() => {
    AOS.init(); // AOSを初期化
  }, []);
  return (
    <Box p={{ base: "0 20px", md: "0 40px" }}>
      <VStack spacing={4}>
        <Center my={{ base: "40px", md: "80px" }}>
          <Text
            fontSize={{ base: "24px", md: "32px" ,lg: "40px" }}
            fontFamily="'Helvetica'"
            position="relative"
            _after={{
              content: "''",
              position: 'absolute',
              display: 'block',
              height: '4px', // 小さな画面では下線を細くする
              width: '100%',
              bottom: '0',
              marginBottom: '-4px', // 小さな画面では下線とテキストの間隔を調整
              background: 'linear-gradient(to right, #FFC857, #FFC857, #DCA7A7)',
            }}
          >    
            Our Mission
          </Text>
        </Center>
        <Box maxWidth={{ base: "100%", md: "800px" }} textAlign="left" margin="0 auto">
          <Text fontSize={{ base: "lg", md: "xl" }} data-aos="fade-up" >
            わたしって、無力だな。<br />
          <Text fontSize="xl" fontFamily="'Zen Maru Gothic', sans-serif" 
            pt="24px" pb="24px" pl="24px" pr="24px"> 
          </Text>
            子どもが生まれて、それまで夫と同じ仕事をしていたけれど、わたしだけが辞めた。<br />
            突如不登校になった子どもを抱え、正社員を辞めた。<br />
            やりたい仕事を諦めた。<br />
            一番大切な、子どもを守るために。<br />
            <Text fontSize="xl" fontFamily="'Zen Maru Gothic', sans-serif" 
            pt="16px" pb="16px" pl="24px" pr="24px"> 
          </Text>
            子どもを見守りながらできる仕事を必死で探した。<br />
            でも、どれだけ良いアイデアを出しても、評価やボーナスに反映されることはなくなった。<br />
            <Text fontSize="xl" fontFamily="'Zen Maru Gothic', sans-serif" 
            pt="16px" pb="16px" pl="24px" pr="24px"> 
          </Text>
            一方で、子どもが大きくなった未来を考えれば考えるほど、<br />
            「この社会に子どもを送り出していいのかな」と思えてくる。<br />
            でも、子どもがいるから。わたしは母親だから。<br />
            そんな、未来を創るような仕事なんて無理だと諦めていた。<br />
          <Text fontSize="xl" fontFamily="'Zen Maru Gothic', sans-serif" 
            pt="16px" pb="16px" pl="24px" pr="24px"> 
          </Text>
            そんなわたしが、Web3に出会った。<br />
            DAO、トレーサビリティ、トークンエコノミー…そんな未来を予感させる言葉たちにわくわくした。<br />
            Web3なら、今の子どもを育てながら、未来の子どもが輝く社会を創れるかもしれない。<br />
            子どもが大きくなった未来を誰よりも真剣に考えている母親だから、<br />
            誰よりも、未来を創造していく力がある。<br />
            <Text fontSize="xl" fontFamily="'Zen Maru Gothic', sans-serif" 
            pt="16px" pb="16px" pl="24px" pr="24px"> 
          </Text>
            未来の子どもたちのために。<br />
            Web3で、新しい働き方のカタチを、つくっています。<br />
            <Text fontSize="xl" fontFamily="'Zen Maru Gothic', sans-serif" 
            pt="16px" pb="16px" pl="24px" pr="24px"> 
          </Text>
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
            Saki Honda (Founder & (株)B2B Makers共同代表)<br />
            <Text fontSize="xl" fontFamily="'Zen Maru Gothic', sans-serif" 
            pt="24px" pb="24px" pl="24px" pr="24px"> 
          </Text>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default Mission;
