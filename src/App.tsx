import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Home from './pages/Home'
import Header from './components/Header/Header'
import WithSubnavigation from './components/Header/Header'


const theme = extendTheme({
  fonts: {
    body: "Manrope",
  },
})

function App() {

  return (
    <ChakraProvider theme={theme}>
      <WithSubnavigation/>
      <Home/>
    </ChakraProvider>

  )
}

export default App
