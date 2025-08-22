import { Box, IconButton, Stack, Typography } from '@mui/material'
import React, { useRef } from 'react'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded'

function Timeline() {

    const scrollRef = useRef(null)

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 150
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
        }
    }

    const years = [1898, 1912, 1956, 1970, 1975, 1978, 1993, 1996, 1997, 1998, 1999, 2000, 2001]
    const descriptionwidth = 300
    const width = descriptionwidth * years?.length / 1.5

    return (
        <Box position={'relative'}>
            <Stack position={'absolute'} top={-20} left={160} direction={'row'}>
                <IconButton size="large" onClick={() => handleScroll("left")}>
                    <ArrowCircleLeftRoundedIcon sx={{ color: '#000', height: 35, width: 35 }} />
                </IconButton>
                <IconButton size="large" onClick={() => handleScroll("right")}>
                    <ArrowCircleRightRoundedIcon sx={{ color: '#000', height: 35, width: 35 }} />
                </IconButton>
            </Stack>
            <Box height={'80vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} ml={'7.5%'} sx={{ overflowX: 'scroll', pl: 165 }} className="scrollbar-hide" ref={scrollRef}>
                <Box height={'2px'} minWidth={width} bgcolor={'black'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    {years.map((year, index) => (
                        <Box key={index} width={18} height={18} bgcolor={'black'} borderRadius={'50%'}>
                            <Box sx={{ rotate: index % 2 == 0 ? '90deg' : '-90deg', ml: index % 2 == 0 ? '50%' : '-50%', mt: index % 2 == 0 ? '50%' : '-50%' }}>
                                <svg width="100" height="2" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0" y1="2" x2="80" y2="2" stroke="black" strokeWidth="3" strokeDasharray="2 3" />
                                </svg>
                            </Box>
                            <Box>
                                <Typography mt={index % 2 == 0 ? 10 : -17} ml={-3} variant='h4'>{year}</Typography>
                                <Typography mt={index % 2 == 0 ? 2 : -20} ml={-3} variant='body2' width={descriptionwidth}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Timeline