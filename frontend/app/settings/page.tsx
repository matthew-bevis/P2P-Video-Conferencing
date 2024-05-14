'use client'

import { Grid } from "@mui/material";


export default function Home() {
  return (
    <Grid container sx={{maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%'}}>
      <Grid item>
        <p>You are in the settings page</p>
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  );
}