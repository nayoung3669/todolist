import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer'
import { ChakraProvider } from '@chakra-ui/react';

function App() {


  return (
    <div className="App">
      <ChakraProvider>
        <div id="header"><Header /></div>
        <div id="sidebar"><Sidebar /></div>
        <div id="main"><Main /></div>
        <div id="footer"><Footer /></div>
      </ChakraProvider>
    </div>
  );
}

export default App;
