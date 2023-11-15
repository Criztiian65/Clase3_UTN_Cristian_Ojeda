import { Box, Text, Image, Flex, Button, Divider, Stack} from "@chakra-ui/react";
import { React } from "react";


const PagDescription = ({ titulo, precio, descripcion, img, codigoSKU, stock }) => {
     console.log();
    return (

         <Flex  justify='center' bg="#d7b4fe" minH='80vh' >
            <Stack p='5' direction={{base:'column', md:'row'}} align={{base: 'center', sm:'center',md:'start'}} >
            <Box as='a' href='https://www.google.com' >
                <Image maxW={300} src={img} alt="Imagen del celular" />
            </Box>

            <Box maxW={{base: 'auto', md: 400}} mx={{base:5, sm:5 , md:0}}>
                <Text as='h1' pb='5' fontSize='3xl' >{titulo}</Text>
                <Text as='p'  >{descripcion} </Text>
                <Text as='p' py='2'>Codigo de producto: <Text as='strong'>{codigoSKU}</Text> </Text>
                <Text as='p' fontSize='3xl' fontWeight='bold'  >$ {precio}</Text>
                <Text as='p' fontSize='2xl' >Disponibles: {stock} {stock>1 ?'unidades':'unidad'}  </Text>
                <Divider m={2} />
                <Button  isDisabled={stock===0 && 'true'} >Comprar</Button>
            </Box>
            </Stack>

        </Flex>
     
    )

}

export { PagDescription }