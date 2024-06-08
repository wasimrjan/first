import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';
export default function Login()
{
    return(
      <Paper>
        <Box  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh">
        <Box 
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <br/>
        <h2 align="center">Login Form</h2>
       
            
             <TextField
                fullWidth
                required
                id="txt_uid"
                label="User ID"
                defaultValue=""
            />

            <TextField
                fullWidth
                required
                id="txt_pass"
                label="Password"
                defaultValue=""
                type='password'
            />

            <Button variant="outlined">Outlined</Button>

        </Box>
        </Box>
        </Paper>
    )
}
