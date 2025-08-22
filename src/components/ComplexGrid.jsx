import { Box, Grid } from '@mui/material'
import React from 'react'

function ComplexGrid() {
    return (
        <Grid container spacing={2} height={'60vh'}>
            <Grid container spacing={2} size={4}>
                <Grid size={12} height={'70%'}>
                    <Box sx={{
                        backgroundImage: 'url("/homeHero3.jpg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        position: 'relative',
                    }} />
                </Grid>
                <Grid size={12} height={'30%'}>
                    <Box sx={{
                        backgroundImage: 'url("/homeHero2.jpg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        position: 'relative',
                    }} />
                </Grid>
            </Grid>
            <Grid container spacing={2} size={4}>
                <Grid container spacing={2} size={12} height={'40%'}>
                    <Grid size={6}>
                        <Box sx={{
                            backgroundImage: 'url("/blueCardBg.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                            position: 'relative',
                        }} />
                    </Grid>
                    <Grid size={6}>
                        <Box sx={{
                            backgroundImage: 'url("/homeHero.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                            position: 'relative',
                        }} />
                    </Grid>
                </Grid>
                <Grid size={12} height={'60%'}>
                    <Box sx={{
                        backgroundImage: 'url("/group.jpg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        position: 'relative',
                    }} />
                </Grid>
            </Grid>
            <Grid container spacing={2} size={4}>
                <Grid size={12} height={'80%'}>
                    <Box sx={{
                        backgroundImage: 'url("/blueCardBg.jpg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        position: 'relative',
                    }} />
                </Grid>
                <Grid size={12} height={'20%'}>
                    <Box sx={{
                        backgroundImage: 'url("/homeHero3.jpg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        position: 'relative',
                    }} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ComplexGrid