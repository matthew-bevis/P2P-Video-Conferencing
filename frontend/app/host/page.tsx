'use client'

import { Button, Grid } from "@mui/material";
import keyGenerator  from '../_components/keyGenerator';

export default function Home() {
  return (
    <Grid container sx={{maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%'}}>
      <Grid item>
        <p>You are in the host page</p>
        <Button variant="contained" onClick={keyGenerator}>
          Generate Key
        </Button>
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  );
}