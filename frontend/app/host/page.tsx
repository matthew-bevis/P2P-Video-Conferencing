'use client';

import React, { useState } from 'react';
import { Button, Grid } from "@mui/material";
import keyGenerator from '../_components/keyGenerator';
import VideoComponent from '../_components/videoComponent';
import axios from 'axios';

interface EncryptionKeyData {
  session: string;
  encryption_key: string;
  valid_from: string;
  valid_until: string;
}

interface SessionData {
  id: string;
  session_key: string;
}

function getCurrentTimeAndTwoHoursLater() {
  const now = new Date();
  const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);
  return {
    valid_from: now.toISOString(),
    valid_until: twoHoursLater.toISOString()
  };
}

async function createSession(): Promise<SessionData> {
  const response = await axios.post('/api/Session/', {
    host_user: 1, // Replace with the actual user ID
    session_key: keyGenerator(),
    status: 'active'
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

async function storeEncryptionKey(postData: EncryptionKeyData) {
  try {
    const response = await axios.post('/api/EncryptionKey/', postData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default function Home() {
  const [roomName, setRoomName] = useState('');
  const [callStarted, setCallStarted] = useState(false);

  const startCall = async () => {
    const session = await createSession();
    const encryptionKey = keyGenerator(); // Generate the encryption key on the frontend
    const { valid_from, valid_until } = getCurrentTimeAndTwoHoursLater();
    const postData: EncryptionKeyData = {
      session: session.id, // Use the session ID from the created session
      encryption_key: encryptionKey,
      valid_from: valid_from,
      valid_until: valid_until
    };
    setRoomName(session.session_key);
    storeEncryptionKey(postData); // Pass the new encryption key and session ID here
    setCallStarted(true); // Set the flag to indicate the call has started
  };

  return (
    <Grid container sx={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%' }}>
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




