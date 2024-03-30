import React, { useState, FC } from 'react';
import { Button, TextField } from '@mui/material';

// Define the props expected by KeyInput
interface KeyInputProps {
  onSubmitKey: (key: string) => void; // Defines a function that takes a string and returns void
}

const KeyInput: FC<KeyInputProps> = ({ onSubmitKey }) => {
  const [key, setKey] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Correctly type the event
    e.preventDefault();
    onSubmitKey(key);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter Key"
        variant="outlined"
        required
        helperText="Key (10 characters)"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default KeyInput;
