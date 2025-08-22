import React from 'react'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Home from './pages/home'
import AboutUs from './pages/aboutus'
import Portfolio from './pages/portfolio'
import WhatWeDo from './pages/whatwedo'
import Careers from './pages/careers'
import PageNotFound from './pages/pagenotfound'

const theme = createTheme({
  palette: {
    primary: {
      light: 'rgba(0, 113, 206, 0.5)',
      main: '#0071ce',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
   typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    allVariants: {color: '#1E1E1E'}
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/whatwedo' element={<WhatWeDo />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App