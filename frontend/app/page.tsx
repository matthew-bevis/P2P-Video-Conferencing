'use client'

import { useMemo, useState } from 'react';
import { Grid } from "@mui/material";
import Link from "next/link"


export default function Home() {
  return (
    <Grid container sx={{maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%', p: 0, m: 0}}>
      <Grid item>
        <p>This is the home page</p>
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  );
}
