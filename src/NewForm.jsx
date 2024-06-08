import { Grid } from "@mui/material";
import Item from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
function NewForm()
{
    return(
        <>
        <br/>
        <Box component="section" sx={{ p: 2, border: '1px solid grey' }}
        >
            <h6>New Section Form</h6>
            <Grid container spacing={2}>
  <Grid item xs={8}>
  <TextField
                fullWidth
                required
                id="txt_uid"
                label="User ID"
                defaultValue=""
            />
  </Grid>
  <Grid item xs={4}>
  <TextField
                fullWidth
                required
                id="txt_uid"
                label="Password"
                defaultValue=""
                type="password"
            />
  </Grid>
  
</Grid>

</Box>
        </>
    )
}

export default NewForm;