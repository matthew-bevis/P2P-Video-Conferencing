'use client'

import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const KeyInput = () => {
  const [key, setKey] = useState('');

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        console.log(key); // Or handle the key value as needed
      }}
    >
      <TextField
        label="Enter Key"
        variant="outlined"
        required
        helperText="Key (10 characters)"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{ marginRight: '8px' }} // Adjusted to directly modify spacing
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default KeyInput;
