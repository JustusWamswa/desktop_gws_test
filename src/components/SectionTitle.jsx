import { Typography } from '@mui/material'
import React from 'react'

function SectionTitle({ title }) {
    return (
        <Typography id={title} variant='h6' textAlign={'center'} fontWeight={800} textTransform={'uppercase'} color='primary' pt={10} pb={5}>
            {title}
        </Typography>
    )
}

export default SectionTitle