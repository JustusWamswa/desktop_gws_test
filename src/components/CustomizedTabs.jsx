import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router'

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#fff',
  },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'uppercase',
    fontWeight: 600,
    marginLeft: 29,
    color: 'rgba(255, 255, 255, 1)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
  }),
)

const routes = [
    '/',          
    '/aboutus',     
    '/portfolio', 
    '/whatwedo',  
    '/careers',    
  ]

function CustomizedTabs() {
  const [value, setValue] = useState(0)
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    navigate(routes[newValue])
    setValue(newValue)
  }

  return (
    <Box>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs"
      >
        <StyledTab label="Home" />
        <StyledTab label="About Us" />
        <StyledTab label="Portfolio" />
        <StyledTab label="What we do" />
        <StyledTab label="Careers" />
      </StyledTabs>
    </Box>
  )
}

export default CustomizedTabs