'use client'

import React, { useState } from 'react';
import { Button, Grid } from "@mui/material";
import keyGenerator from '../_components/keyGenerator';
import VideoComponent from '../_components/videoComponent';

export default function Home() {
  const [roomName, setRoomName] = useState('');
  const [callStarted, setCallStarted] = useState(false);

  const startCall = () => {
    const newRoomName = keyGenerator(); // Generate a unique key for the room
    setRoomName(newRoomName);
    setCallStarted(true); // Set the flag to indicate the call has started
  };

  return (
    <Grid container sx={{maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%'}}>
      <Grid item>
        <p>You are on the host page</p>
        {!callStarted && (
          <Button variant="contained" onClick={startCall}>
            Start Call
          </Button>
        )}
        {callStarted && (
          <>
            <p>Room Name: {roomName}</p>
            <VideoComponent roomName={roomName} />
          </>
        )}
      </Grid>
      <Grid item>
        {/* Other content if necessary */}
      </Grid>
    </Grid>
  );
}