'use client'

import React from 'react';
import { Grid } from "@mui/material";
import KeyInput from '../_components/keyInput';

export default function Home() {
  return (
    <Grid container spacing={2} sx={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%' }}>
      <Grid item xs={12}>
        <p>You are on the join page.</p>
        <p>Please enter the 10-character key provided by the host.</p>
      </Grid>
      <Grid item xs={12}>
        <KeyInput/>
      </Grid>
    </Grid>
  );
}
