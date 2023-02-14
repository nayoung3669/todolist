import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import { ChakraProvider } from '@chakra-ui/react';
import { DataProvider } from './Components/Todos/DataProvider';


function App() {
  return (
    <div className="App">

        <ChakraProvider>
          <div id="header"><Header /></div> 
              <div id="main">
                <DataProvider> 
                  <Main />
                </DataProvider>
              </div>
          <div id="footer"><Footer /></div>
        </ChakraProvider>
    </div>
  );
}

export default App;
