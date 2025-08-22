import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Box } from '@mui/material'


function TableComp({ title, entry }) {

  const headings = []
  for (let index = 0; index < 4; index++) {
    headings.push(<TableCell align="left" sx={{fontWeight: 500, color: 'primary.main', borderTop: '#0071ce 1px solid', borderBottom: '#0071ce 1px solid'}}>{title}</TableCell>)
  }

  const entries = []
  for (let index = 0; index < 4; index++) {
    entries.push(
      <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="left" sx={{fontWeight: 500, color: 'primary.main', border: 'none'}}>{entry}</TableCell>
        <TableCell align="left" sx={{fontWeight: 500, color: 'primary.main', border: 'none'}}>{entry}</TableCell>
        <TableCell align="left" sx={{fontWeight: 500, color: 'primary.main', border: 'none'}}>{entry}</TableCell>
        <TableCell align="left" sx={{fontWeight: 500, color: 'primary.main', border: 'none'}}>{entry}</TableCell>
      </TableRow>
    )
  }

  return (
    <TableContainer component={Box} mt={2} mb={5}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headings}
          </TableRow>
        </TableHead>
        <TableBody>
          {entries}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComp

