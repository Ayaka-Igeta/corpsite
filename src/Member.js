import React, { useState } from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  Image, 
  SimpleGrid,
  Center, 
  useDisclosure, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton, 
  ModalBody
 } from '@chakra-ui/react';

//  メンバーデータの定義（コンポーネントの外部に配置）
 const membersData = [
  {
    name: "Saki Honda",
    role: "Chief Visionary",
    imageSrc: "saki.jpg",
    vision: "「ホームスクール x tech教育」プロジェクトの設立と運営をしています / 未来の働き方をつくるビジョンを本にすべく執筆中。人生で大切にしていること... 個人的なライフテーマが「この社会の多様性を積み重ねていくこと」なので、今、新しい働き方や教育のカタチを創ったりと手を動かすことができていて、悩むこともあるけれど楽しいです。",
    profile: "93年生まれ、小中高を海外で過ごす。慶應義塾大学卒業後、就職せずにフリーランスのライターを経て、B2B Makersに参加。2023年より共同代表。4歳の息子育て中。"
  },
  {
    name: "Tomoyo Shuto",
    role: "Chief Community",
    imageSrc: "shutomo.jpg",
    vision: "毎日のジャーナリングと読書の実践家であり、SNSで発信もしています。書く世界に魅力を感じて日々のタスク整理やビジョンボートなど手帳やノートを活用しています。ビジョンボードは8年、ノートや手帳活用は6年、バレットジャーナルや感情ジャーナリングなど様々なジャーナリング方法を組み合わせて自分自身とのコミュニケーションを大切にしています。",
    profile: "前職は女性のための美容の仕事をしていました。今は私自身男女3人の子どもを育てながら女性がもっと自由に働ける社会について考えています。"
  },
  {
    name: "Ayaka Igeta",
    role: "Chief Public Relations",
    imageSrc: "ayaka.jpg",
    vision: "私のビジョンは、【人生という航海においてチャレンジする気持ちを忘れない。希望の帆を広げ、風を掴む】です。",
    profile: "大学卒業後は金融機関やベンチャー企業を経て結婚、出産し、現在は7歳と4歳の子育て中です。子どもたちが大人になる頃には、女性、特に母たちがさまざまな面で損せず、より生きやすく、より働きやすい社会を本気で作りたいと思っています。今、Web3の革新的なテクノロジーを用いてそれが可能かトライアンドエラーを繰り返しているところです。私たちは、それをやり遂げることが会社としての責任であって、私自身は当社の考え方やアクションを広く世の中の方に知っていただけるように動いていきたいと思っています。様々な方々にお力添えをいただければ幸いです。諦めずに取り組んでいきたいと思っています。"
  },
  {
    name: "Daichi Sugahara",
    role: "Chief Public Relations",
    imageSrc: "daichi.jpg",
    vision: "私のビジョンは、Web3をはじめとする最新テクノロジーを活用し、革新的な働き方を創出することです。特に、自分と同じような若い世代や子育て中の家族が直面する挑戦に対応し、彼らがより柔軟で充実したライフスタイルを享受できるような一助となりたいと考えています。技術を通じて、働き方の未来を再定義し、次世代へのインスピレーションとなるような遺産を築いていく。それが私たちの約束であり、社会への責任です。",
    profile: "こんにちは、菅原大地です。エンジニアとして、常に新しい技術を学び、その知識を仕事に活かすことに情熱を傾けています。ランニングや健康にも関心が高く、日々のウェルネスを追求することで心身のバランスを整えています。朝のランニングで最高な1日を始めることができます。また、アニメを観ることで想像力を膨らませ、クリエイティブな思考を刺激しています。"
  },
];
// Memberコンポーネントの定義
const Member = ({ name, role, imageSrc, onOpen }) => {
  return (
    <Flex direction="column" align="center" textAlign="center" mx="24px" zIndex="2" onClick={onOpen}>
      <Image src={imageSrc} alt={name} boxSize={["150px", "200px", "250px"]} borderRadius="full" objectFit="cover" mb="24px" cursor="pointer" />
      <Text fontSize="xl" fontWeight="bold" mb="4">{name}</Text>
      <Text fontSize="md">{role}</Text>
    </Flex>
  );
};

// Membersコンポーネントの定義
const Members = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
    onOpen();
  };

  return (
    <Flex 
    direction="column" 
    align="center" 
    justify="center" 
    w="100vw"
    h={{ base: "100vh", md: "100vh", lg: "100vh" }}
    bgImage="member.jpg" 
    bgSize="cover" 
    bgPos="center center" 
    p={["20px", "20px", "40px"]} 
    position="relative">

      <Box position="absolute"
       top={0} left={0} right={0} bottom={0} 
       bg="white" 
       opacity="0.9" 
       zIndex="2"
       >
       </Box>

      <Center 
      my={{ base: "20px", md: "40px" }} 
      mb={{ base: "20px", md: "80px" }}
      position="relative" 
      zIndex="3" 
      >
        <Text
        fontSize={{ base: "24px", md: "32px", lg: "40px" }}
        fontFamily="Helvetica" 
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

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} 
       spacing="40px"
       position="relative"
       zIndex="4"
       >
        {membersData.map((member, index) => (
          <Box key={index} onClick={() => handleOpenModal(member)}>
            <Member {...member} onOpen={() => handleOpenModal(member)} />
          </Box>
        ))}
      </SimpleGrid> 

      {selectedMember && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="24px" display="flex" justifyContent="center" alignItems="center">
              {selectedMember.name}
            </ModalHeader>
            <ModalCloseButton position="absolute" right="8px" top="8px" />
            <ModalBody p={6}>
            <Flex direction="column" align="center" mb={6}>
             <Image borderRadius="full" boxSize="240px" src={selectedMember.imageSrc} alt={selectedMember.name} objectFit="cover"/>
             <Text mt={6} fontSize="lg" fontWeight="bold">{selectedMember.role}</Text>
             </Flex> 
            <Text fontSize="md" fontWeight="semibold" mb={2}>My vision</Text>
            <Text fontSize="md" mb={4}>{selectedMember.vision}</Text>
            <Text fontSize="md" fontWeight="semibold" mb={2}>Profile</Text>
            <Text fontSize="md">{selectedMember.profile}</Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};

export default Members;

