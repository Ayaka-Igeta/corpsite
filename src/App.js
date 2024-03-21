import { ChakraProvider } from "@chakra-ui/react";
import Header from './Header';
import Top from './Top';
import Mission from './Mission';
import Platfome from './Platfome';
import Member from './Member';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <ChakraProvider>
     <Header/>
     <Top/>
     <Mission/>
     <Platfome/>
     <Member/>
     <Contact/>
     <Footer/>
    </ChakraProvider>
  );
}

export default App;
