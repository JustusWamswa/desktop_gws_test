import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

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

function SectionNav({ sections }) {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    document.getElementById(`Section ${newValue+1}`)?.scrollIntoView({ behavior: "smooth" });
    setValue(newValue)
  }

  const allSections = []
  for (let index = 0; index < sections; index++) {
      allSections.push(<StyledTab key={index} label={`Section ${index + 1}`} />)
    }

  return (
    <Box bgcolor={'primary.light'} display={'flex'} justifyContent={'center'}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs"
      >
        {allSections}
      </StyledTabs>
    </Box>
  )
}

export default SectionNav