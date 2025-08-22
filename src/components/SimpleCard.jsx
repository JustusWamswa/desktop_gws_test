import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

function SimpleCard() {
    return (
        <Stack borderRadius={1} pr={15} width={'45%'}>
            <Box>
                <Typography variant='h6' fontWeight={500} color='primary'>LOREM IPSUM</Typography>
                <Typography variant='body2' pt={3} pb={10}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Typography>
            </Box>
            <Button variant='outlined' color="primary" 
            sx={{ textTransform: 'none', borderRadius: 5, py: 1, px: 2, width: 'fit-content' }}
            >
                Lorem Ipsum
            </Button>
        </Stack>
    )
}

export default SimpleCard