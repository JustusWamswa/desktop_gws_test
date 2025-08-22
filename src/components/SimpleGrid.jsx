import React from 'react'
import { Box, Grid } from '@mui/material'

function SimpleGrid() {

    const items = [
        { image: '/item1.png' },
        { image: '/item2.png' },
        { image: '/item3.png' },
        { image: '/item4.png' },
        { image: '/item5.png' },
        { image: '/item6.png' },
    ]

    return (
        <Grid container spacing={2} height={'70vh'}>
            {items.map((item, index) => (
                <Grid size={4} key={index}>
                    <Box sx={{
                        backgroundImage: 'url("homeHero3.jpg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        position: 'relative',
                    }} />
                </Grid>
            ))}
        </Grid>
    )
}

export default SimpleGrid