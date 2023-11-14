import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from './Components/Header/navbar'
import { PagDescription } from './Components/Description/PagDescription'
import Footer from './Components/Footer/Footer'




function App() {
  const productos = {

      "id": "MLA830174206",
      "title": "Motorola One 64 Gb Negro 4 Gb Ram",
      "price": 23318.9,
      "condition": "new",
      "free_shipping": true,
      "thumbnail": "https://motorolain.vtexassets.com/arquivos/ids/155579/155417.png?v=637208225959170000" 

  }


  
  return (
    <ChakraProvider>
      <Navbar/>
      <PagDescription key={productos.id} titulo={productos.title} precio={productos.price} img={productos.thumbnail} condicion={productos.condition} envio={productos.free_shipping} />
      <Footer/>
    </ChakraProvider>
  )
  
}




export default App
