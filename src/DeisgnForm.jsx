import * as React from 'react';
import {Box,Grid,TextField,Radio,RadioGroup,FormControlLabel, Container} from '@mui/material/';
import {Select,MenuItem,FormControl,InputLabel,FormGroup,Checkbox} from '@mui/material';

export default function DesignForm(){

 const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        <Container>
        
        <Box component="section" sx={{ p: 2, border: '1px solid grey' }}
        >

            

            <Grid container spacing={3} padding={3}>

                <Grid item xs={12}>
                <h6>New Testing Form</h6>
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        required
                        id="txt_uid"
                        label="User ID"
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        required
                        id="txt_pass"
                        label="Password"
                        defaultValue=""
                        type='password'
                    />
                </Grid>

                <Grid item xs={6}>
                <Box component="section" sx={{ p: 1, border: '1px solid grey' }}>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                </Box>
                </Grid>

                <Grid item xs={2}>
                <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
                </Grid>

                <Grid item xs={4}>
                <div>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel required control={<Checkbox />} label="Required" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</div>
                </Grid>


            </Grid>


        </Box>
        
        </Container>
    )

}