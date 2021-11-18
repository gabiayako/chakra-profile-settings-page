import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Form } from './Form';

const theme = extendTheme({
  colors: {
    nu: {
      background: '#820ad1',
      dark: '#442c61',
      text: '#bc8ae1',
      900: '#4c0677 ',
      800: '#551A8B',
      400: '#6E00BD',
      500: '#722d9c',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Form />
    </ChakraProvider>
  );
}

export default App;
