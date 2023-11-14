import React from 'react'
import { Box, Grid} from "@chakra-ui/react";

export default function Footer() {
  return (

    <Box bg='green' pt='10vh'>
        
        <Box display="grid" gridGap={2} gridAutoFlow="row dense">
        Grid
        </Box>


        <Grid gap={2} autoFlow="row dense">
        Grid
        </Grid>
    </Box>



  )
}
