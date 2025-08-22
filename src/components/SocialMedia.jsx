import { Box } from '@mui/material'
import React from 'react'

function SocialMedia() {
    return (
        <Box display={'flex'} justifyContent={'center'} mt={3} mb={7}>
            <Box
                sx={{
                    backgroundImage: 'url("linkedin.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    height: '2.5rem',
                    width: '2.5rem',
                    position: 'relative',
                }}
            />
            <Box
                sx={{
                    backgroundImage: 'url("facebook.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    height: '2.5rem',
                    width: '2.5rem',
                    position: 'relative',
                }}
            />
        </Box>
    )
}

export default SocialMedia