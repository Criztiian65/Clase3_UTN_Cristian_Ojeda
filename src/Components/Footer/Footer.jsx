import React from 'react'
import { Box, Text, Flex, Stack, Button} from "@chakra-ui/react";

export default function Footer() {
  return (

    <Flex h='10vh' bg='#9338fd'   >

      <Stack w='100%' direction='row' justify='Space-around' align='center'>
        <Button color='black' as='a' href='#' variant='link' >
          <Text  >Reclamos</Text>
        </Button>

        <Box>
          <Text>
            Todos los derechos reservados para My Tienda
          </Text>
        </Box>

        <Button color='black' as='a' href='#' variant='link'>
          <Text  > Valoranos</Text>
        </Button>
      </Stack>

    </Flex>



  )
}
