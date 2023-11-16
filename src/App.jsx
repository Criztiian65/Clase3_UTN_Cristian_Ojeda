import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from './Components/Header/navbar'
import { PagDescription } from './Components/Description/PagDescription'
import Footer from './Components/Footer/Footer'




function App() {
  const productos = {

    "id": "MLA830174206",
    "title": "Motorola One",
    "price": 23318.9,
    "Description": "El Motorola One es un smartphone parte del programa Android One de Google y recibirá Android 9.0 Pie poco después de llegar al mercado. El Motorola One cuenta con una pantalla HD+ de 5.9 pulgadas y está potenciado por un procesador Snapdragon 625 con 4GB de RAM y 64GB de almacenamiento interno. En su posterior su ubica una cámara dual de 13 MP + 2 MP, mientras que una cámara de 8 megapixels se encarga de las selfies. El Motorola One completa sus características con radio FM, puerto USB-C, lector de huellas y una batería de 3000 mAh con soporte de carga rápida.",
    "SKU": "MO234005",
    "Stock": 14,
    "thumbnail": "https://motorolain.vtexassets.com/arquivos/ids/155579/155417.png?v=637208225959170000"

  }



  return (

    <ChakraProvider>
      <Navbar />
      <PagDescription key={productos.id} titulo={productos.title} precio={productos.price} descripcion={productos.Description} img={productos.thumbnail} codigoSKU={productos.SKU} stock={productos.Stock} />
      <Footer />
    </ChakraProvider>

  )

}




export default App
