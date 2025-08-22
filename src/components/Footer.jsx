import { Box } from '@mui/material'
import React from 'react'
import ContactForm from './ContactForm'
import CompanyInfo from './CompanyInfo'

function Footer() {
  return (
    <Box >
        <ContactForm />
        <CompanyInfo />
    </Box>
  )
}

export default Footer