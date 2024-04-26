import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useBreakpointValue,
  VStack,
  Flex, 
  Text,
  Checkbox
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; 

const ContactForm = () => {
  const navigate = useNavigate();
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });

  const handleSubmit = (event) => {
    event.preventDefault();
    // 送信処理をここに実装
    navigate('/thank-you'); // 送信後のページに遷移
  };
  
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
      fontWeight="bold"
      color="white" 
      mb={["16px", "20px", "40px"]}
      position="relative">
        Contact
    </Text>

    <Text color="white" mb="4">
      どうぞお気軽にお問い合わせください！
    </Text>

    <Box  p={4}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
        <FormControl id="companyname">
          <Flex align="center">
            <FormLabel color="white" fontWeight="bold">
              会社名 <Text as="span" color="#FFC857">*</Text>
            </FormLabel>
          </Flex>
          <Input type="text" bg="white" />
        </FormControl>
        <FormControl id="name">
          <Flex align="center">
            <FormLabel color="white" fontWeight="bold">
              お名前 <Text as="span" color="#FFC857">*</Text>
            </FormLabel>
          </Flex>
          <Input type="text" bg="white" />
        </FormControl>

          <FormControl id="email">
          <FormLabel color="white" fontWeight="bold">
            メールアドレス <Text as="span" color="#FFC857">*</Text>
            </FormLabel>
            <Input type="email" bg="white" />
          </FormControl>

          <FormControl id="phone">
            <FormLabel color="white" fontWeight="bold">
            電話番号 <Text as="span" color="#FFC857">*</Text>
            </FormLabel>
            <Input type="tel" bg="white"/>
          </FormControl>

          <FormControl id="message">
            <FormLabel color="white" fontWeight="bold">
              お問い合わせ内容 <Text as="span" color="#FFC857">*</Text>
              </FormLabel>
            <Textarea bg="white"/>
          </FormControl>


         <Box bg="white" p={4} shadow="md" overflowY="auto" maxH="300px">
          <Textarea placeholder="プライバシーポリシー" isReadOnly  />
          <Text mt={4}>
            ここにプライバシーポリシーが入ります。
          </Text>
         </Box>

        <FormControl>
          <Checkbox color="white" fontWeight="bold" colorScheme="teal">
          <Text color="white" fontWeight="bold">プライバシーポリシーに同意する</Text>
          </Checkbox>
        </FormControl>

          <Button size={buttonSize} colorScheme="teal" bg="#FFC857" type="submit" >
            お問い合わせを送信する
          </Button>
        </VStack>
      </form>
    </Box>
  </Flex>
  );
};

export default ContactForm;
