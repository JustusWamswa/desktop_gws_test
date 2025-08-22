import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import CustomizedTabs from './CustomizedTabs'
import { useNavigate } from 'react-router'

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element, window: PropTypes.func,
}

function HideAppBar(props) {
  const navigate = useNavigate()

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{px: 0, boxShadow: 'none'}}>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box component={'img'} src='/gws_logo.png' width={'5%'} height={'70%'} sx={{cursor: 'pointer'}} onClick={() => navigate('/')} />
            <CustomizedTabs />
          </Toolbar>
        </AppBar>
      </HideOnScroll> 
      <Toolbar />
    </>
  )
}

export default HideAppBar
