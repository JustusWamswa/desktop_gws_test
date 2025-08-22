import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

function BlueCardLarge() {
    return (
        <Stack borderRadius={1} direction={'row'} height={'60vh'} overflow={'hidden'} color={'white'}>
            <Box width={'60%'} bgcolor={'primary.main'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} px={10}>
                <Typography variant='h4' fontWeight={700} mb={5} color='white'>Lorem Ipsum</Typography>
                <Typography variant='body2' color='white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco                </Typography>
            </Box>
            <Box sx={{
                backgroundImage: 'url("/blueCardBg.jpg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                width: '40%',
                position: 'relative',
            }}>
            </Box>
        </Stack>
    )
}

export default BlueCardLarge