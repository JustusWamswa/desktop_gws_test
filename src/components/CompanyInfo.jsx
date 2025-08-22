import { Box, Typography } from '@mui/material'
import React from 'react'

function CompanyInfo() {
  return (
    <Box bgcolor={'#0689F4'} display={'flex'} justifyContent={'space-between'} py={10} px={18} color={'white'}>
        <Box component={'img'} src='/gws_logo.png' width={'15%'} height={'70%'} />
        <Typography variant='body2' color='white'>
            GWS Technologies Ltd Office 3-4. <br />
            The Rubik 54, Impasse Thompson <br />
            Vivea Business Park 80815, Moka <br />
            Mauritius
        </Typography>
        <Typography variant='body2' color='white'>
            Reception: (230) 465 0300 <br /> <br />
            Email: support@gws-technologies.com <br />
        </Typography>
    </Box>
  )
}

export default CompanyInfo