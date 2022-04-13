import React from 'react'
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles'

const NameSearch = ({students}) => {

  // const theme = createTheme({
  //   palette: {
  //     primary: {
        
  //     }
  //   }
  // })

  return (
    <div>
      <TextField
          className='search'
          id="filled-name-search"
          label="Search by name"
          type="search"
          variant="filled"
        />
        <TextField
          className='search'
          id="filled-tag-search"
          label="Search by tag"
          type="search"
          variant="filled"
        />
    </div>
  )
}

export default NameSearch