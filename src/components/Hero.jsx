import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../index.css'
import Slider from "react-slick"

function Hero() {

    const settings = {
        dots: true,
        infinite: true,
        variableWidth: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "rgba(0,0,0,0)",
                    borderRadius: "10px",
                    padding: "10px",
                    position: "absolute",
                    bottom: 100,
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    }

    const data = [
        { image: '/homeHero.jpg', title: 'Be part of the team', description: '' },
        { image: '/homeHero2.jpg', title: 'Join us', description: '' },
        { image: '/homeHero3.jpg', title: 'We are hiring', description: '' },
    ]


    return (
        <>
            <Slider {...settings} className='slider'>
                {data.map((item) => (
                    <Box width={'100%'} height={'90vh'}>
                        <Box
                            sx={{
                                backgroundImage: `url('${item?.image}')`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                width: '100%',
                                position: 'relative',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    zIndex: 1,
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 2,
                                    color: 'white',
                                    padding: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                }}
                            >
                                <Typography variant='h3' fontWeight={700} color='white'>{item?.title}</Typography>
                                <Typography width={'50%'} textAlign={'center'} py={3} color='white'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco
                                </Typography>
                                <Button variant='contained' sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 700, textTransform: 'none', px: 5, py: 1, borderRadius: 5 }}>
                                    Join now
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </>
    )
}

export default Hero