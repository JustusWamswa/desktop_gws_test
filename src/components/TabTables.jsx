import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TableComp from './TableComp'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}

function TabTables() {
    const theme = useTheme()
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box bgcolor={'rgba(0, 113, 206, 0.05)'} borderRadius={8} mt={8}>
            <Typography variant='h6' textAlign={'center'} fontWeight={800} textTransform={'uppercase'} color='primary' pt={5} pb={5}>
                LOREM IPSUM
            </Typography>
            <AppBar position="static" sx={{ bgcolor: '#F8FCF5', width: '50%', mx: 'auto', borderRadius: 8, overflow: 'hidden', boxShadow: 0 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="none"
                    textColor="primary.main"
                    variant="fullWidth"
                    sx={{ color: 'primary.main' }}
                >
                    <Tab label="Lorem" {...a11yProps(0)} sx={{bgcolor: value == 0 && 'primary.main', color: value == 0 ? 'white' : 'primary.main', fontWeight: 700, borderRadius: 8, textTransform: 'capitalize'}} />
                    <Tab label="Ipsum" {...a11yProps(1)} sx={{bgcolor: value == 1 && 'primary.main', color: value == 1 ? 'white' : 'primary.main', fontWeight: 700, borderRadius: 8, textTransform: 'capitalize'}}/>
                    <Tab label="Dolor" {...a11yProps(2)} sx={{bgcolor: value == 2 && 'primary.main', color: value == 2 ? 'white' : 'primary.main', fontWeight: 700, borderRadius: 8, textTransform: 'capitalize'}}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
                <TableComp title={"Lorem Ipsum"} entry={"Lorem ipsum dolor"} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <TableComp title={"Sed ut perspiciatis"} entry={"Sed ut perspiciatis unde"} />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <TableComp title={"dolor sit amet, consectetur"} entry={"dolor sit amet, adipiscing"} />
            </TabPanel>
        </Box>
    )
}

export default TabTables