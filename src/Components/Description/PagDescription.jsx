import { Box, Text, Image, Flex, Button, Divider} from "@chakra-ui/react";
import { React } from "react";


const PagDescription = ({ titulo, precio, img, condicion, envio }) => {

    return (

        <Flex h='75vh' justify='center' bg="tomato" align='center' >


<Box  >
            <Image width={{base: 50,  md: 300  }} src={img} alt="Imagen del celular" />
            </Box>

            <Box width={{b:100, md: 300  }} >
            <Text fontSize='2xl' >{titulo}</Text>
                <Text >El dispositivo se encuentra en condición: <Text fontWeight="semibold">{condicion}</Text> </Text>
                <Text fontSize='3xl' fontWeight='bold'  >{precio}</Text>
                <Text >{envio && "Compra con envío gratis"}</Text>
<Divider m={2} ></Divider>
                <Button as='href' href='#' >Comprar</Button>
            </Box>

        </Flex>
    )

}

export { PagDescription }