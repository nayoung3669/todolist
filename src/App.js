import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/';
import Footer from './Components/Footer'
import { ChakraProvider } from '@chakra-ui/react';
import { DataProvider } from './Context/DataProvider';


function App() {
  return (
    <div className="App">
        <ChakraProvider>
          <div id="header"><Header /></div> 
                  <DataProvider> 
                    <div id="main">
                      <Main />
                    </div>
                  </DataProvider>
          <div id="footer"><Footer /></div>
        </ChakraProvider>
    </div>
  );
}

export default App;
