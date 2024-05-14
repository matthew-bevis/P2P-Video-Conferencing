'use client'

import React, { useState } from 'react';
import { Button, Grid } from "@mui/material";
import keyGenerator from '../_components/keyGenerator';
import VideoComponent from '../_components/videoComponent';
import axios from 'axios';

export default function Home() {
  const [roomName, setRoomName] = useState('');
  const [callStarted, setCallStarted] = useState(false);

  const startCall = () => {
    const newRoomName = keyGenerator(); // Generate a unique key for the room
    setRoomName(newRoomName);
    createEncryptionKey(roomName);
    setCallStarted(true); // Set the flag to indicate the call has started
  };

  const createEncryptionKey = async (roomName: string) => {
    try {
        const response = await axios.post('https://unityviddb.database.windows.net/api/create-encryption-key/', roomName);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
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