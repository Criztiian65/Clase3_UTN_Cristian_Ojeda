
import { Box, Button, ButtonGroup } from '@chakra-ui/react'

function Navbar() {
 
  return (
    <Box as="header" bgColor={"#9338fd"} display="flex" alignItems="center" justifyContent="end" >

    <ButtonGroup spacing={3} p='5px'>
    <Button as='a' href='#'>Productos</Button>
    <Button as='a' href='https://www.google.com' >Carrito</Button>
    <Button as='a' href='#' >Nosotros</Button>

    </ButtonGroup>


    </Box>
  )
}

export  { Navbar }
