import React from 'react'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputAdornment, InputLabel, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import useItemStore from '../stores/useItemStore'

function SearchFilter() {

    const { searchQuery, setSearchQuery, checkedValues, setCheckedValues } = useItemStore()
    console.log(checkedValues);

    const checkBoxLabels = ['Real Estate', 'Booking Engine', 'Campaign Website', 'Corporate Website',
        'eCommerce', 'Government Body Website', 'Hosting', 'Informational'
    ]

    return (
        <Box color={'primary.main'} width={'40%'} pr={10}>
            <FormControl sx={{ m: 1 }} variant="standard" fullWidth color='primary.main'>
                <InputLabel htmlFor="standard-adornment-search" size='small' sx={{ color: 'primary.light' }}>Search</InputLabel>
                <Input id="standard-adornment-search" type='text' fullWidth color='primary'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon color='primary' />
                        </InputAdornment>
                    }
                    inputProps={{ style: { color: '#0071ce' } }}
                    sx={{
                        '&:before': {
                            borderBottomColor: 'primary.main',
                        },
                        '&:after': {
                            borderBottomColor: 'primary.main',
                        },
                        '&:hover:not(.Mui-disabled):before': {
                            borderBottomColor: 'primary.main',
                        },
                    }}
                />
            </FormControl>
            <Typography variant='body2' pb={1} pt={5} color='primary.main'>Categories</Typography>
            <FormGroup>
                {checkBoxLabels.map((checkBoxLabel, index) => (
                    <FormControlLabel
                        control={
                            <Checkbox
                                size='small'
                                sx={{ color: 'primary.main' }}
                                name={checkBoxLabel}
                                checked={!!checkedValues[checkBoxLabel]}
                                onChange={(e) => setCheckedValues(checkBoxLabel, e.target.checked)}
                            />
                        }
                        label={checkBoxLabel}
                        slotProps={{ typography: { variant: 'body2', fontWeight: !!checkedValues[checkBoxLabel] ? '700' : '400', color: 'primary.main' } }}
                        key={index}
                        sx={{ ':hover': { scale: 1.05, transition: '0.3s ease-in-out' } }}
                    />
                ))}
            </FormGroup>
        </Box>
    )
}

export default SearchFilter