import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function MatUI(){

    const [age, setAge] = React.useState('');

    function haldleChange(event){
        console.log(event.target.value);
        setAge(age);
    }

    return (
        <>
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />

<div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>


    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={haldleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>


        </>
    )
}

export default MatUI;