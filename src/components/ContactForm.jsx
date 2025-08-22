import React from 'react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, Link, TextField, Typography } from '@mui/material'
import ReCAPTCHA from 'react-google-recaptcha'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ContactForm() {
    return (
        <Box bgcolor={'primary.main'} px={25} py={10} component={'form'} color={'white'} autoComplete='off'>
            <Typography variant='h4' fontWeight={700} mb={4} color='white'>CONTACT US</Typography>
            <Typography variant='subtitle1' fontWeight={600} mb={1} color='white'>Send us a message</Typography>
            <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} mb={7}>
                <FormControl sx={{ m: 1, width: '30%' }} variant="standard" color='white'>
                    <InputLabel htmlFor="Name" size='small' sx={{ color: 'white' }}>Name</InputLabel>
                    <Input id="Name" type='text' fullWidth color='white'
                        inputProps={{ style: { color: 'white' } }}
                        sx={{
                            '&:before': {
                                borderBottomColor: 'white',
                            },
                            '&:after': {
                                borderBottomColor: 'white',
                            },
                            '&:hover:not(.Mui-disabled):before': {
                                borderBottomColor: 'white',
                            },
                        }}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '30%' }} variant="standard" color='white'>
                    <InputLabel htmlFor="surname" size='small' sx={{ color: 'white' }}>Surname</InputLabel>
                    <Input id="surname" type='text' fullWidth color='white'
                        inputProps={{ style: { color: 'white' } }}
                        sx={{
                            '&:before': {
                                borderBottomColor: 'white',
                            },
                            '&:after': {
                                borderBottomColor: 'white',
                            },
                            '&:hover:not(.Mui-disabled):before': {
                                borderBottomColor: 'white',
                            },
                        }}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '30%' }} variant="standard" color='white'>
                    <InputLabel htmlFor="age" size='small' sx={{ color: 'white' }}>Age</InputLabel>
                    <Input id="age" type='number' fullWidth color='white'
                        inputProps={{ style: { color: 'white' } }}
                        sx={{
                            '&:before': {
                                borderBottomColor: 'white',
                            },
                            '&:after': {
                                borderBottomColor: 'white',
                            },
                            '&:hover:not(.Mui-disabled):before': {
                                borderBottomColor: 'white',
                            },
                        }}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '30%' }} variant="standard" color='white'>
                    <InputLabel htmlFor="phonenumber" size='small' sx={{ color: 'white' }}>Phone Number</InputLabel>
                    <Input id="phonenumber" type='text' fullWidth color='white'
                        inputProps={{ style: { color: 'white' } }}
                        sx={{
                            '&:before': {
                                borderBottomColor: 'white',
                            },
                            '&:after': {
                                borderBottomColor: 'white',
                            },
                            '&:hover:not(.Mui-disabled):before': {
                                borderBottomColor: 'white',
                            },
                        }}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '30%' }} variant="standard" color='white'>
                    <InputLabel htmlFor="emailaddress" size='small' sx={{ color: 'white' }}>Email Address</InputLabel>
                    <Input id="emailaddress" type='email' fullWidth color='white'
                        inputProps={{ style: { color: 'white' } }}
                        sx={{
                            '&:before': {
                                borderBottomColor: 'white',
                            },
                            '&:after': {
                                borderBottomColor: 'white',
                            },
                            '&:hover:not(.Mui-disabled):before': {
                                borderBottomColor: 'white',
                            },
                        }}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '30%' }} variant="standard" color='white'>
                    <InputLabel htmlFor="subject" size='small' sx={{ color: 'white' }}>Subject</InputLabel>
                    <Input id="subject" type='text' fullWidth color='white'
                        inputProps={{ style: { color: 'white' } }}
                        sx={{
                            '&:before': {
                                borderBottomColor: 'white',
                            },
                            '&:after': {
                                borderBottomColor: 'white',
                            },
                            '&:hover:not(.Mui-disabled):before': {
                                borderBottomColor: 'white',
                            },
                        }}
                    />
                </FormControl>
                <TextField
                    id="multiline-textfield"
                    label="Your message"
                    multiline
                    maxRows={4}
                    minRows={3}
                    fullWidth
                    size='small'
                    variant="standard"
                    InputLabelProps={{ style: { color: "white" } }}
                    InputProps={{
                        style: { color: "white" },
                        disableUnderline: false, // keep underline
                    }}
                    sx={{
                        "& .MuiInput-underline:before": { borderBottomColor: "white" },
                        "& .MuiInput-underline:after": { borderBottomColor: "white" },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                            borderBottomColor: "white",
                        },
                    }}
                />
            </Box>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            color='white'
                            size='small'
                            sx={{ color: 'white' }}
                        />
                    }
                    label={<Typography color='white'>I agree to <Link href="#" color='inherit'>Privacy Policy</Link></Typography>}
                    slotProps={{ typography: { variant: 'body2' } }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            color='white'
                            size='small'
                            sx={{ color: 'white' }}
                        />
                    }
                    label={<Typography color='white'>I agree to <Link href="#" color='inherit'>terms & conditions</Link></Typography>}
                    slotProps={{ typography: { variant: 'body2' } }}
                />
            </FormGroup>
            <Box display={'flex'} justifyContent={'space-between'} mt={4}>
                <Box height={45} sx={{transform: 'scale(0.8)', transformOrigin: '0 0'}}><ReCAPTCHA sitekey="SITE_KEY"  /></Box>
                <Button endIcon={<ArrowRightAltIcon />} variant='contained' sx={{ bgcolor: 'white', color: '#00368F', textTransform: 'none', px: 5, py: 1, borderRadius: 5 }}>
                    Submit
                </Button>
            </Box>

        </Box>
    )
}

export default ContactForm