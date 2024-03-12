import { ChakraProvider } from "@chakra-ui/react";
import Header from './Header';
import Mission from './Mission';
import Member from './Member';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <ChakraProvider>
     <Header/>
     <Mission/>
     <Member/>
     <Contact/>
     <Footer/>
    </ChakraProvider>
  );
}

export default App;
