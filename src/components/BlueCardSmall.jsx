import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function BlueCardSmall() {
    return (
        <Stack borderRadius={1} pb={2} pt={7} px={3} bgcolor={'primary.light'} direction={'column'} justifyContent={'space-between'} height={'60vh'}>
            <Typography variant='h4' fontWeight={700}>Lorem <br />Ipsum</Typography>
            <Box>
                <Typography variant='body2' mb={1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Button endIcon={<KeyboardArrowRightIcon />} color="black" sx={{ textTransform: 'none', fontWeight: 700, p: 0, mt: 2 }}>
                    Learn more
                </Button>
            </Box>
        </Stack>
    )
}

export default BlueCardSmall