import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box } from '@mui/material'


function AccordionComp() {

  const [expanded, setExpanded] = useState()

  const handleChange = (accordion) => (event, newExpanded) => {
    setExpanded(newExpanded ? accordion : false)
  }

  const accordions = []
for (let index = 0; index < 3; index++) {
  accordions.push(
    <Accordion elevation={0} disableGutters sx={{
      borderBottom: '1px solid black',
      borderTop: index == 0 ?'1px solid black' : 0,
      '&.MuiPaper-root': { borderRadius: 0, }
    }}
    key={index}
    expanded={expanded === `accordion${index}`} onChange={handleChange(`accordion${index}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id={`accordion${index}`}
        sx={{}}
      >
        <Typography component="span" fontWeight={500} py={1}>Lorem Ipsum </Typography>
      </AccordionSummary>
      <AccordionDetails >
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </Typography>
      </AccordionDetails>
    </Accordion>
  )

}

  return (
    <Box width={'55%'}>
      {accordions}
    </Box>
  )
}

export default AccordionComp

