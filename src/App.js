import { ChakraProvider } from "@chakra-ui/react";
import Header from './Header';
import Top from './Top';
import Mission from './Mission';
import Platfome from './Platfome';
import Community from './Community';
import Member from './Member';
import Contact from './Contact';
import Company from './Company';
import ContactForm from './ContactForm';
import Footer from './Footer';

function App() {
  return (
    <ChakraProvider>
     <Header/>
     <Top/>
     <Mission/>
     <Platfome/>
     <Community/>
     <Member/>
     <Contact/>
     <Company/>
     <ContactForm/>
     <Footer/>
    </ChakraProvider>
  );
}

export default App;
