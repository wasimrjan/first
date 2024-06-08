import * as React from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Mat(){
    return(
        <>

        <br/>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />

        </>
    )
}

export default Mat;