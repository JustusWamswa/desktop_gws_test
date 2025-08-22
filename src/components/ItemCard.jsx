import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

function ItemCard(props) {

    const { image, title, description } = props
    return (
        <Paper sx={{ borderRadius: 1, height: '40vh', overflow: 'hidden', color: 'primary.main', ':hover': {scale: 1.02, transition: '0.3s ease-in-out'}}} elevation={3} >
            <Box sx={{
                backgroundImage: `url('${image}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '70%',
                width: '100%',
                position: 'relative',
            }}>
            </Box>
            <Box p={1} color={'primary'} height={'30%'}>
                <Typography variant='subtitle2' fontWeight={600} mb={1} color='primary.main'>{title}</Typography>
                <Typography variant='body2' color='primary.main'>{description}</Typography>
            </Box>

        </Paper>
    )
}

export default ItemCard